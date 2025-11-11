import { getCategories } from "@/app/actions/getCategories";
import DesktopNav from "./desktop-navbar";
import MobileNavigation from "./mobile-navbar";

const Header = () => {
  const categories = getCategories();

  return (
    <header>
      <DesktopNav categories={categories} />
      <MobileNavigation />
    </header>
  );
};

export default Header;
