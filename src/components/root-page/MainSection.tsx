import Image from "next/image";
import styles from "./MainSection.module.css";
interface MainSectionProps {
  lang: string;
}
const MainSection: React.FC<MainSectionProps> = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.texts}>
          <h1>Trusted Medical & Laboratory</h1>
          <p>
            A wide range of consumables and specialized lab equipment with
            authenticity guarantee and official licenses — ready to be delivered
            nationwide. A wide range of consumables and specialized lab
            equipment
          </p>
          <button>Click</button>
        </div>

        <Image
          className={styles.image}
          width={1200}
          height={800}
          src="/labor.png"
          alt="Banner"
        />
      </div>

      <ul className={styles.bonus}>
        <li>
          <Image width={100} height={100} src="/shield.svg" alt="shield-icon" />
          <div>
            <p className={styles.bonusTitle}>Authentic products</p>
            <p className={styles.bonusDesc}>Guarenteed original items</p>
          </div>
        </li>
        <li>
          <Image
            width={100}
            height={100}
            src="/streamline.svg"
            alt="streamline-icon"
          />
          <div>
            <p className={styles.bonusTitle}>Fast shipping</p>
            <p className={styles.bonusDesc}>Quick process and delivery</p>
          </div>
        </li>
        <li>
          <Image
            width={100}
            height={100}
            src="/support.svg"
            alt="support-icon"
          />
          <div>
            <p className={styles.bonusTitle}>Available support</p>
            <p className={styles.bonusDesc}>We&apos;re here to help, Anytime</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MainSection;
