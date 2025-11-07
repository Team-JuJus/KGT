import HeaderLogo from "./HeaderLogo";
import SearchAndLanguage from "./SearchBar";

import { getCategories } from "@/app/actions/getCategories";
import DesktopNav from "./desktop-navbar";
import MobileNavigation from "./mobile-navbar";

const Header = () => {
  const categories = getCategories();

  return (
    <header className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-5">
        <HeaderLogo />
        <DesktopNav categories={categories} />
        <MobileNavigation />

        <div className="max-md:hidden">
          <SearchAndLanguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
