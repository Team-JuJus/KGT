import "@/styles/globals.css";

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

const LangLayout: React.FC<LayoutProps> = ({ children, params }) => {
  const lang = params.lang === "fa" ? "fa" : "en";
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body>{children}</body>
    </html>
  );
};

export default LangLayout;
