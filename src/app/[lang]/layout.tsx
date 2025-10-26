import { Roboto } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LayoutProps from "next";

import "@/globals.css";
import { getCategories } from "../actions/getCategories";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const yekan = localFont({
  src: [
    {
      path: "../../assets/fonts/Yekan.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const dir = lang === "fa" ? "rtl" : "ltr";

  const categories = getCategories();

  return (
    <html
      lang={lang}
      dir={dir}
      className={lang == "en" ? roboto.className : yekan.className}
    >
      <body>
        <Header lang={lang} categories={categories} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
