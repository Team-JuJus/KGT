import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  link: string;
  desc: string;
  image: string;
  alt: string;
  isEnglish: boolean;
  country: string;
  company: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  link,
  image,
  alt,
  desc,
  isEnglish,
  category,
  company,
}) => {
  return (
    <article className="relative w-72 overflow-hidden rounded-2xl bg-white p-3">
      <Image
        src="/zeiss.jpg"
        alt={company}
        width={100}
        height={100}
        className="absolute top-0 right-0 w-20"
      />

      <Image src={image} width={800} height={800} alt={alt} />
      <p>{category}</p>
      <hr />

      <div>
        <h3>{title}</h3>

        <p>{desc}</p>

        <Link href={link}>{isEnglish ? "View details" : "جزئیات بیشتر"}</Link>
      </div>
    </article>
  );
};

export default ProductCard;
