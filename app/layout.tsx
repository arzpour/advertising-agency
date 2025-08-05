import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import TanstackProvider from "@/providers/tanstack.provider";
import ReduxProvider from "@/providers/redux.provider";
import { vazirMatn } from "@/lib/fonts";

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
        <Toaster position="top-right" dir="rtl" />
        <ReduxProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
