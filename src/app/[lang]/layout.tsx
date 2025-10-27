import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LayoutProps from "next";
import "@/globals.css";
import { getDirection } from "@/utils/getDirection";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const dir = getDirection(lang);

  return (
    <html
      lang={lang}
      dir={dir}
      className={
        lang == "en"
          ? roboto.className
          : lang == "fa"
            ? yekan.className
            : roboto.className
      }
    >
      <body>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
