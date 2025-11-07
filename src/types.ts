export type Product = {
  id: string;
  name_en: string;
  name_fa: string;
  summary_en: string;
  summary_fa: string;
  link: string;
  image_url: string;
  alt: string;
  country_en: string;
  country_fa: string;
  company: string;
  category_id: { name_en: string; name_fa: string };
};

export type Articles = {
  title_en: string;
  title_fa: string;
  link: string;
  alt: string;
  image: string;
  summary_en: string;
  summary_fa: string;
  author_en: string;
  author_fa: string;
  time: string;
};

export type HomeData = {
  title_en: string;
  title_fa: string;
  about_en: string;
  about_fa: string;
  banner: string;
  bonuses: {
    title_en: string;
    title_fa: string;
    image: string;
    desc_en: string;
    desc_fa: string;
  }[];
};

export type AboutData = {
  images: string[];
  text_en: string;
  text_fa: string;
};

export type CategoryRaw = {
  id: string;
  name_fa: string;
  name_en: string;
  link: string;
  parent_id: string | null;
};

export type Category = {
  id: string;
  name_fa: string;
  name_en: string;
  parent_id: string | null;
  link: string;
  children?: Category[];
};

export type Company = {
  id: string;
  name_en: string;
  name_fa: string;
  link: string;
  desc: string;
  country_en: string;
  country_fa: string;
};

export interface NavbarProps {
  categories: Promise<CategoryRaw[]>;
}
