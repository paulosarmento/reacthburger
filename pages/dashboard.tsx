import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoRed from "/assets/images/logo-icon-orange.svg";
import LogoTextRed from "/assets/images/logo-text-orange.svg";

const Dashboard: NextPage = () => {
  return (
    <>
      <header>
        <Link href="/">
          <a>
            <Image src={LogoRed} alt="Logo Icone" id="logo-icon" />
            <Image src={LogoTextRed} alt="Logo Texto" id="logo-text" />
          </a>
        </Link>
      </header>
    </>
  );
};

export default Dashboard;
