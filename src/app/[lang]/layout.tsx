import LayoutProps from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { getDirection } from "@/utils/getDirection";
import { yekan, roboto } from "@/utils/fonts";

import "@/globals.css";

// ──────────────────────────────────────────────────────────────────────
// Static Params to build pages
// ──────────────────────────────────────────────────────────────────────
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const langs = ["en", "fa"];
  return langs.map((lang: string) => ({
    lang: lang,
  }));
}

// ──────────────────────────────────────────────────────────────────────
// Language classname selector
// ──────────────────────────────────────────────────────────────────────
const fontClass = (lang: string) => {
  if (lang == "en") return roboto.className;
  else if (lang == "fa") return yekan.className;
  else return roboto.className;
};

// ──────────────────────────────────────────────────────────────────────
// Layout component
// ──────────────────────────────────────────────────────────────────────
type LangLayoutType = React.FC<LayoutProps<"/[lang]">>;

const LangLayout: LangLayoutType = async ({ children, params }) => {
  const { lang } = await params;
  const pageDirection = getDirection(lang);

  return (
    <html lang={lang} dir={pageDirection} className={fontClass(lang)}>
      <body>
        <Header />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
};

export default LangLayout;
