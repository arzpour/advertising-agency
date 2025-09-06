import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";

export const vazirmatnGoogle = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-Vazirmatn",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const vazirMatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Vazirmatn",
  display: "swap",
});
