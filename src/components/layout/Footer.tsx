import Image from "next/image";

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  console.log(lang);
  return (
    <footer>
      <div>
        <Image width={100} height={100} src="/logo.svg" alt="logo" />
      </div>

      <div>
        <h3>Title</h3>
        <hr />
        <ul>
          <li>
            <a href="#">lalala</a>
          </li>
          <li>
            <a href="#">lalala</a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Title</h3>
        <hr />
        <ul>
          <li>
            <a href="#">lalala</a>
          </li>
          <li>
            <a href="#">lalala</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
