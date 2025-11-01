import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link className="flex items-center gap-3" href="/">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="logo"
        className="w-40 max-md:w-40"
      />
    </Link>
  );
};

export default HeaderLogo;
