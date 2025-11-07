import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const yekan = localFont({
  src: [
    {
      path: "../assets/fonts/Yekan.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});
