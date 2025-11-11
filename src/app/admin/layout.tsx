import "@/globals.css";

import { yekan, roboto } from "@/utils/fonts";

// ──────────────────────────────────────────────────────────────────────
// Language classname selector
// ──────────────────────────────────────────────────────────────────────
const fontClass = (lang: string) => {
  if (lang == "en") return roboto.className;
  else if (lang == "fa") return yekan.className;
  else return roboto.className;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" className={fontClass("fa")}>
      <body>{children}</body>
    </html>
  );
}
