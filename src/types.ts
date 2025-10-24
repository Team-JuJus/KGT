export type Product = {
  title_en: string;
  title_fa: string;
  summary_en: string;
  summary_fa: string;
  link: string;
  image: string;
  alt: string;
  country_en: string;
  country_fa: string;
  company: string;
  category_en: string;
  category_fa: string;
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
