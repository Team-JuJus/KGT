import { getAboutUsData } from "@/app/actions/getAboutUsData";
import Image from "next/image";
import React from "react";

interface AboutUsProps {
  isEnglish: boolean;
}

const AboutUs: React.FC<AboutUsProps> = async ({ isEnglish }) => {
  const data = await getAboutUsData();
  return (
    <section className="mx-auto flex max-w-5xl items-center justify-center gap-20 max-md:scale-80 max-md:flex-col">
      <div className="relative h-[448px] w-[420px]">
        <Image
          src={data.images[0]}
          alt={isEnglish ? "About Us Image" : "تصویر درباره ما"}
          width={200}
          height={200}
          className="absolute top-0 left-0 h-52 w-52 rounded-full bg-left object-cover shadow-lg"
        />
        <Image
          src={data.images[1]}
          alt={isEnglish ? "About Us Image" : "تصویر درباره ما"}
          width={200}
          height={200}
          className="absolute top-1/2 right-0 h-52 w-52 -translate-y-1/2 rounded-full bg-left object-cover shadow-lg"
        />
        <Image
          src={data.images[2]}
          alt={isEnglish ? "About Us Image" : "تصویر درباره ما"}
          width={200}
          height={200}
          className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-left object-cover shadow-lg"
        />
      </div>
      <div className="">
        <p className="text-center font-bold">
          {isEnglish ? "Karagene Tashkhis" : "کاراژن تشخیص"}
        </p>
        <p className="text-center">{isEnglish ? data.text_en : data.text_fa}</p>
      </div>
    </section>
  );
};

export default AboutUs;
