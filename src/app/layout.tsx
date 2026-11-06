import type { Metadata } from "next";
import { Montserrat, Anton, Bonheur_Royale } from "next/font/google";
import { MotionProvider } from "@/components/Motion";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const bonheur = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonheur",
});

export const metadata: Metadata = {
  title: "Lewi Maropo | Frontend Developer",
  description: "Portofolio Lewi Maropo, Junior Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-16 lg:scroll-pt-0">
      <body className={`${montserrat.variable} ${anton.variable} ${bonheur.variable} font-sans antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
