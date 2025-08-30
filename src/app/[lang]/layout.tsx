import "@/styles/globals.css";

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

const LangLayout: React.FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params;
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body>{children}</body>
    </html>
  );
};

export default LangLayout;
