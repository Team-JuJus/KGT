export function getDirection(lang: string) {
  return lang === "fa" ? "rtl" : lang === "en" ? "ltr" : "ltr";
}
