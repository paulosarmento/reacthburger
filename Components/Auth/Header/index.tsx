import { NextPage } from 'next';
import Link from 'next/link';
import img from '../../../assets/images/logo-icon-orange.svg'
const Header: NextPage = () => {
  return (
    <header>
      <Link href="/login">
        <a>
          <img
            src="/images/logo-icon-orange.svg"
            alt="Logo Icone"
            id="logo-icon"
          />
          <img
            src="/images/logo-text-orange.svg"
            alt="Logo Texto"
            id="logo-text"
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
