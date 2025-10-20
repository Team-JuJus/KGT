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

export const MOCK_PRODUCTS = [
  {
    title_en: "Product name",
    title_fa: "نام محصول",
    link: "",
    alt: "",
    image: "/microscope.jpg",
    summary_en:
      "This is a short description of the product user sees and interacts with",
    summary_fa: "این یک توضیح کوتاه درباره محصول برای کاربر میباشد",
    category_en: "Device",
    category_fa: "دستگاه",
    company: "Zeis",
    country_fa: "آلمان",
    country_en: "Germany",
  },
  {
    title_en: "Product name",
    title_fa: "نام محصول",
    link: "",
    alt: "",
    image: "/microscope.jpg",
    summary_en:
      "This is a short description of the product user sees and interacts with",
    summary_fa: "این یک توضیح کوتاه درباره محصول برای کاربر میباشد",
    category_en: "Device",
    category_fa: "دستگاه",
    company: "Zeis",
    country_fa: "آلمان",
    country_en: "Germany",
  },
  {
    title_en: "Product name",
    title_fa: "نام محصول",
    link: "",
    alt: "",
    image: "/microscope.jpg",
    summary_en:
      "This is a short description of the product user sees and interacts with",
    summary_fa: "این یک توضیح کوتاه درباره محصول برای کاربر میباشد",
    category_en: "Device",
    category_fa: "دستگاه",
    company: "Zeis",
    country_fa: "آلمان",
    country_en: "Germany",
  },
];

export const MAIN_SECTION = {
  banner: "/labor.png",
  title_en: "Trusted Medical & Laboratory",
  title_fa: "تجهیزات پزشکی و آزمایشگاهی معتبر",
  about_en:
    "A wide range of consumables and specialized lab equipment with authenticity guarantee and official licenses — ready to be delivered nationwide. A wide range of consumables and specialized lab equipment",
  about_fa:
    "انواع تجهیزات و لوازم مصرفی تخصصی آزمایشگاهی با ضمانت اصالت و مجوزهای رسمی — آماده ارسال به سراسر کشور.",
  button_en: "Click",
  button_fa: "کلیک کنید",

  bonuses: [
    {
      title_en: "Authentic products",
      title_fa: "محصولات اصل و معتبر",
      image: "/shield.svg",
      desc_en: "Guarenteed original items",
      desc_fa: "تضمین اصالت کالا",
    },
    {
      title_en: "Fast shipping",
      title_fa: "ارسال سریع",
      image: "/streamline.svg",
      desc_en: "Quick process and delivery",
      desc_fa: "فرآیند پردازش و ارسال سریع",
    },
    {
      title_en: "Available support",
      title_fa: "پشتیبانی در دسترس",
      image: "/support.svg",
      desc_en: "We're here to help, Anytime",
      desc_fa: "در هر زمان در کنار شما هستیم",
    },
  ],
};

export const MOCK_ARTICLES = [
  {
    title_en: "Article title",
    title_fa: "عنوان مقاله",
    link: "",
    alt: "",
    image: "/equip.png",
    summary_en: "A short summary about the content of the article...",
    summary_fa: "خلاصه ای مختصر درباره محتوای مقاله...",
    author_en: "Soheyl Ashena",
    author_fa: "سهیل آشنا",
    time: new Date().toDateString(),
  },
  {
    title_en: "Article title",
    title_fa: "عنوان مقاله",
    link: "",
    alt: "",
    image: "/equip.png",
    summary_en: "A short summary about the content of the article...",
    summary_fa: "خلاصه ای مختصر درباره محتوای مقاله...",
    author_en: "Soheyl Ashena",
    author_fa: "سهیل آشنا",
    time: new Date().toDateString(),
  },
  {
    title_en: "Article title",
    title_fa: "عنوان مقاله",
    link: "",
    alt: "",
    image: "/equip.png",
    summary_en: "A short summary about the content of the article...",
    summary_fa: "خلاصه ای مختصر درباره محتوای مقاله...",
    author_en: "Soheyl Ashena",
    author_fa: "سهیل آشنا",
    time: new Date().toDateString(),
  },
];

export const NAV_LINKS = [
  { name_fa: "خانه", name_en: "Home", link: "/" },
  { name_fa: "محصولات", name_en: "Products", link: "products" },
  { name_fa: "مقالات", name_en: "Articles", link: "articles" },
  { name_fa: "درباره ما", name_en: "About us", link: "about" },
  { name_fa: "تماس با ما", name_en: "Contact", link: "contact" },
];
