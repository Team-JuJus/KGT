import { truncateText } from "@/utils/truncate";
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
    <article className="relative h-96 w-72 overflow-hidden rounded-2xl bg-white p-3 shadow-lg transition-transform hover:scale-105">
      <Image
        src="/zeiss.jpg"
        alt={company}
        width={100}
        height={100}
        className="absolute top-0 right-0 w-20"
      />

      <Image
        src={image}
        width={800}
        height={800}
        alt={alt}
        className="mx-auto h-48 w-auto"
      />
      <p className="text-xs text-gray-600">{category}</p>
      <hr className="my-1" />
      <div>
        <p className="mb-4 text-lg leading-5 font-bold">{title}</p>
        <p className="mb-2 text-sm text-gray-600">{truncateText(desc, 50)}</p>

        <Link href={link}>
          <button className="w-28 rounded-md bg-blue-900 p-1 text-white">
            {isEnglish ? "Read more" : "جزئیات بیشتر"}
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
