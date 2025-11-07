import Image from "next/image";
import React from "react";

interface AboutUsProps {
  isEnglish: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isEnglish }) => {
  return (
    <section className="mx-auto flex max-w-5xl items-center justify-center gap-20 max-md:scale-80 max-md:flex-col">
      <div className="relative h-[448px] w-[420px]">
        <Image
          src={"/a1.png"}
          alt={isEnglish ? "About Us Image" : "تصویر درباره ما"}
          width={200}
          height={200}
          className="absolute top-0 left-0 h-52 w-52 rounded-full bg-left object-cover shadow-lg"
        />
        <Image
          src={"/a2.png"}
          alt={isEnglish ? "About Us Image" : "تصویر درباره ما"}
          width={200}
          height={200}
          className="absolute top-1/2 right-0 h-52 w-52 -translate-y-1/2 rounded-full bg-left object-cover shadow-lg"
        />
        <Image
          src={"/a3.png"}
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
        <p className="text-center">
          {isEnglish
            ? "We are committed to excellence."
            : "ما متعهد به برتری هستیم."}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
