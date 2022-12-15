import { NextPage } from 'next';
import Link from 'next/link';
import { LogoTextHcode, HburgerLogo, HburgerOrange } from '../../../Icons';
const Header: NextPage = () => {
  return (
    <header>
      <Link href="/login">
        <a>
          <HburgerOrange />
          &nbsp;&nbsp;
          <LogoTextHcode />
        </a>
      </Link>
    </header>
  );
};

export default Header;
