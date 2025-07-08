import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirMatn = Vazirmatn({
  variable: "--font-Vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "آژانس تبلیغاتی هانس",
  description:
    "برندینگ، استراتژی، تولید محتوا، مدیریت شبکه های اجتماعی، طراحی سایت، سئو و...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirMatn.variable} font-Vazirmatn antialiased`}>
        {children}
      </body>
    </html>
  );
}
