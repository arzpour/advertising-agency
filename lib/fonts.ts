import localFont from "next/font/local";

export const vazirMatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});
