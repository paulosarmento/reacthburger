import LogoTextRed from "../../assets/images/logo-text-orange.svg";
import {HburgerOrange} from "../../Icons";
import Image from "next/image";
import Link from "next/link";

export const HeaderAdmin = () => {

  

  return (
    <header>
      <Link href="/">
        <a>
          <HburgerOrange />
          <Image src={LogoTextRed} alt="Logo Texto" id="logo-text" />
        </a>
      </Link>
    </header>
  );
};
