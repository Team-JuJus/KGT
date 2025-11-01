import { GiMicroscope } from "react-icons/gi";
import { PiDnaFill } from "react-icons/pi";
import { SiMoleculer } from "react-icons/si";
import { SlChemistry } from "react-icons/sl";

export const MOCK_CATEGORIES = [
  {
    title_en: "Devices",
    title_fa: "دستگاه ها",
    link: "",
    Icon: GiMicroscope,
    color: 0x55789e,
  },
  {
    title_en: "Molecular genetic",
    title_fa: "ژنتیک مولکولی",
    link: "",
    Icon: SiMoleculer,
    color: 0x5ba8f5,
  },
  {
    title_en: "Cytogenetic",
    title_fa: "سیتوژنتیک",
    link: "",
    Icon: PiDnaFill,
    color: 0x968fee,
  },
  {
    title_en: "Chemicals",
    title_fa: "مواد شیمیایی",
    link: "",
    Icon: SlChemistry,
    color: 0x65e3ca,
  },
];

export const MOCK_COMPANIES = [{ title: "Zeiss", logo: "/zeiss.jpg" }];

export const NAV_LINKS = [
  { name_fa: "خانه", name_en: "Home", link: "" },
  { name_fa: "محصولات", name_en: "Products", link: "products" },
  { name_fa: "درباره ما", name_en: "About us", link: "about" },
  { name_fa: "تماس با ما", name_en: "Contact", link: "contact" },
];
