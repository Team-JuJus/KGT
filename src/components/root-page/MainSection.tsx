import Image from "next/image";
import styles from "./MainSection.module.css";

import { MAIN_SECTION as data } from "@/Data";
interface MainSectionProps {
  lang: string;
}
const MainSection: React.FC<MainSectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";
  const title = isEnglish ? data.title_en : data.title_fa;
  const about = isEnglish ? data.about_en : data.about_fa;
  const buttonText = isEnglish ? data.button_en : data.button_fa;

  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.texts}>
          <h1>{title}</h1>
          <p>{about}</p>
          <button>{buttonText}</button>
        </div>

        <Image
          className={styles.image}
          width={1200}
          height={800}
          src={data.banner}
          alt="Banner"
        />
      </div>

      <ul className={styles.bonus}>
        {data.bonuses.map((bonus, index) => (
          <li key={index}>
            <Image
              width={100}
              height={100}
              src={bonus.image}
              alt="bonus-icon"
            />
            <div>
              <p className={styles.bonusTitle}>
                {isEnglish ? bonus.title_en : bonus.title_fa}
              </p>
              <p className={styles.bonusDesc}>
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
