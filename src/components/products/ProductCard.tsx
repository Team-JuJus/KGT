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
    <article className="relative w-80 overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
      <Image
        src="/zeiss.jpg"
        alt={company}
        width={100}
        height={100}
        className="absolute top-0 right-0 w-20"
      />

      <Image src={image} width={800} height={800} alt={alt} />
      <p className="text-xs text-gray-600">{category}</p>
      <hr className="my-1" />
      <div>
        <p className="mb-1 text-xl font-bold">{title}</p>
        <p className="mb-4 text-sm text-gray-600">{desc}</p>

        <Link href={link}>
          <button className="rounded-md bg-blue-900 p-2 text-white">
            {isEnglish ? "View details" : "جزئیات بیشتر"}
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
