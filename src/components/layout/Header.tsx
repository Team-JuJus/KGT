import { getCategories } from "@/app/actions/getCategories";
import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";
import SearchAndLanguage from "./SearchBar";

interface HeaderProps {
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const categories = getCategories();

  return (
    <header className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-5">
        <HeaderLogo />
        <Navbar lang={lang} categories={categories} />
        <div className="max-md:hidden">
          <SearchAndLanguage lang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
