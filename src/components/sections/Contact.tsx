"use client";

import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import Image from "next/image";
import { cn } from "cn";

const previews = [
  { title: "Exo Worship Library", image: "/images/work/exo-worship.webp" },
  { title: "MaropoChord", image: "/images/work/maropochord.webp" },
  { title: "Crypto Dashboard", image: "/images/work/crypto-dashboard.webp" },
];

const popups = {
  success: {
    art: "/images/message-sent.svg",
    background: "bg-gold-100",
    title: "Got Your Message!",
    text: "Really appreciate you reaching out. I’ll be in touch soon.",
    action: "Back to Home",
  },
  failed: {
    art: "/images/message-failed.svg",
    background: "bg-neutral-200",
    title: "Message Failed to Send",
    text: "Sorry about that. Please check your connection and try again.",
    action: "Try Again",
  },
};

type Status = keyof typeof popups;

const labelClass = "flex flex-col gap-0.5 text-sm font-bold leading-7 text-neutral-950 lg:gap-1.5";
const fieldClass =
  "w-full rounded-[12px] border border-neutral-300 bg-white px-4 py-2 text-base font-medium leading-7.5 text-neutral-950 outline-offset-2 placeholder:text-neutral-600 focus-visible:outline-2 focus-visible:outline-neutral-950 lg:tracking-[-0.03em]";
const buttonClass =
  "h-11 w-full rounded-full bg-brand-300 text-sm font-bold leading-7 text-white outline-offset-2 transition-colors hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-neutral-950 disabled:cursor-not-allowed disabled:opacity-70 lg:h-12";

export default function Contact() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const popup = status && popups[status];

  useEffect(() => {
    if (status) dialogRef.current?.showModal();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("subject", "New message from your portfolio");

    setSending(true);
    let sent = false;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      sent = result.success === true;
    } catch {
      sent = false;
    }
    setSending(false);

    if (sent) form.reset();
    setStatus(sent ? "success" : "failed");
  }

  function handleAction() {
    dialogRef.current?.close();
    if (status === "success") document.getElementById("home")?.scrollIntoView();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  }

  return (
    <section id="contact" className="relative bg-white px-4 py-10 lg:p-30">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:grid lg:grid-cols-[540fr_612fr] lg:items-start lg:gap-12">
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-2 text-neutral-950">
            <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
              Let’s Work Together
            </h2>
            <p className="text-sm font-medium leading-7 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
              Have a project in mind or just want to say hi? Drop me a message — I’d love to hear
              from you.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-[15.5px] lg:max-w-116.5 lg:gap-5">
            {previews.map((preview) => (
              <li key={preview.title} className="relative aspect-square">
                <Image
                  src={preview.image}
                  alt={`${preview.title} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 142px, 33vw"
                  className="rounded-[6px] object-cover lg:rounded-[8px]"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mb-2.5 mt-[160.5px] lg:m-0">
          <Image
            src="/images/contact-character.svg"
            alt=""
            width={192}
            height={171}
            className="absolute -top-[160.5px] left-1/2 -translate-x-1/2 lg:-top-38.75 lg:left-[36.44%] lg:translate-x-0"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-[16px] bg-white p-4 shadow-[0_0_28px_rgba(197,197,197,0.25)] lg:rounded-[24px] lg:p-8"
          >
            <label className={labelClass}>
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Enter your name"
                className={cn(fieldClass, "h-12")}
              />
            </label>
            <label className={labelClass}>
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className={cn(fieldClass, "h-12")}
              />
            </label>
            <label className={labelClass}>
              Message
              <textarea
                name="message"
                required
                placeholder="Enter your message"
                className={cn(fieldClass, "min-h-33.5 resize-y")}
              />
            </label>
            <button type="submit" disabled={sending} className={buttonClass}>
              {sending ? "Sending…" : "Let’s Talk"}
            </button>
          </form>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-popup-title"
        onClose={() => setStatus(null)}
        className="m-0 size-full max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-black/70"
      >
        {popup && (
          <div
            onClick={handleBackdropClick}
            className="flex min-h-full items-center justify-center px-4 py-16"
          >
            <div className="relative w-full max-w-90.25 rounded-[16px] bg-white text-center lg:max-w-129.5">
              <div className={cn("h-45.75 rounded-t-[16px] lg:h-56.25", popup.background)} />
              <Image
                src={popup.art}
                alt=""
                width={263}
                height={294}
                className="absolute -top-15.25 left-1/2 -ml-[94.5px] w-[221px] max-w-none lg:-top-14.5 lg:-ml-30.5 lg:w-[263px]"
              />
              <div className="flex flex-col gap-4 p-6 lg:gap-8 lg:px-8 lg:pb-10 lg:pt-8">
                <div className="flex flex-col gap-0.5 lg:gap-2">
                  <h3
                    id="contact-popup-title"
                    className="text-lg font-bold leading-8 text-neutral-950 lg:text-xl lg:leading-8.5"
                  >
                    {popup.title}
                  </h3>
                  <p className="text-sm font-medium leading-7 text-neutral-700 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
                    {popup.text}
                  </p>
                </div>
                <button type="button" onClick={handleAction} className={buttonClass}>
                  {popup.action}
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
