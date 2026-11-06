import { Mail } from "lucide-react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="10 10 20 20" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M15.3974 28.1056V17.3005H11.8092V28.1056H15.3978H15.3974ZM13.604 15.8255C14.8551 15.8255 15.634 14.9958 15.634 13.9589C15.6105 12.8983 14.8551 12.0918 13.6278 12.0918C12.3997 12.0918 11.5977 12.8983 11.5977 13.9588C11.5977 14.9957 12.3762 15.8254 13.5805 15.8254H13.6038L13.604 15.8255ZM17.3836 28.1056H20.9716V22.0722C20.9716 21.7497 20.995 21.4263 21.0898 21.196C21.3491 20.5505 21.9395 19.8823 22.931 19.8823C24.229 19.8823 24.7486 20.8731 24.7486 22.3258V28.1056H28.3365V21.9103C28.3365 18.5916 26.5665 17.0472 24.2058 17.0472C22.2703 17.0472 21.4203 18.1299 20.948 18.8674H20.9719V17.3009H17.3838C17.4306 18.3145 17.3835 28.106 17.3835 28.106L17.3836 28.1056Z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/LewzzJrs", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/lewi-maropo", icon: <LinkedinIcon /> },
  {
    label: "Email",
    href: "mailto:nainggolanlewi3@gmail.com",
    icon: <Mail size={20} strokeWidth={1.67} aria-hidden="true" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-4 py-8 lg:px-32 lg:py-6">
      <div className="mx-auto flex max-w-300 flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-xs leading-6 text-neutral-25 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
          © {new Date().getFullYear()} Lewi Maropo. All rights reserved.
        </p>
        <ul className="flex gap-3 lg:gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex size-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-25 outline-offset-2 transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-25"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
