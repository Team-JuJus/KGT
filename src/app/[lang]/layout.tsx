import { Roboto } from "next/font/google";

const roboto = Roboto();

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

const LangLayout: React.FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params;
  const dir = lang == "fa" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className={lang === "en" ? roboto.className : ""}>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
};

export default LangLayout;
