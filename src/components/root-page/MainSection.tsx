import Image from "next/image";

import clsx from "clsx";
import { getMainSectionData } from "@/app/actions/getMainSectionData";
interface MainSectionProps {
  lang: string;
}

const MainSection: React.FC<MainSectionProps> = async ({ lang }) => {
  const isEnglish = lang === "en";

  const data = await getMainSectionData();

  const title = isEnglish ? data.title_en : data.title_fa;
  const about = isEnglish ? data.about_en : data.about_fa;

  return (
    <section className="w-full">
      <div className="relative mx-auto mb-15 flex max-w-7xl items-center justify-between max-md:flex-col max-md:gap-10">
        <div className="max-w-3xl max-md:order-2">
          <p className="mb-7 text-3xl font-bold">{title}</p>
          <p className="mb-7 text-gray-600">{about}</p>
        </div>

        <div className="relative w-md max-md:order-1 max-md:w-xs">
          <Image
            width={1200}
            height={800}
            src={data.banner}
            alt="Banner"
            className="w-full"
          />
          <Image
            width={100}
            height={100}
            src="yellow-rec.svg"
            alt=""
            className="absolute top-0 right-0 -z-10 w-8/10 rounded-sm"
          />
        </div>

        <div
          className={clsx(
            "absolute h-full w-full",
            !isEnglish && "-scale-x-100",
          )}
        >
          <Image
            width={100}
            height={100}
            src="zoza.svg"
            alt=""
            className="absolute top-0 right-0 -z-20 h-full w-auto max-md:hidden"
          />
        </div>
      </div>

      <ul className="mx-auto flex w-full max-w-7xl justify-around gap-5 rounded-4xl p-2 max-md:flex-col md:border-1 md:border-gray-200">
        {data.bonuses.map((bonus, index) => (
          <li key={index} className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src={bonus.image}
              alt="bonus-icon"
              className="w-10"
            />
            <div>
              <p className="text-md font-bold text-blue-900">
                {isEnglish ? bonus.title_en : bonus.title_fa}
              </p>
              <p className="text-xs text-blue-800/80">
                {isEnglish ? bonus.desc_en : bonus.desc_fa}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainSection;
