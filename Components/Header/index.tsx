import LogoTextRed from "../../assets/images/logo-text-orange.svg";
import {HburgerOrange} from "../../Icons"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export const Header = () => {
  const [open, setIsOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <header>
      <Link href="/">
        <a>
        
          <HburgerOrange />
          <Image src={LogoTextRed} alt="Logo Texto" id="logo-text" />
        </a>
      </Link>
      <div className={["profileMenu", open ? "show" : ""].join(" ")}>
        <Link href="/profile">
          <a>Alterar Dados</a>
        </Link>
        <Link href="/addresses">
          <a>Seus Endereços</a>
        </Link>
        <Link href="/orders">
          <a>Seus Pedidos</a>
        </Link>
        <Link href="/dashboard">
          <a>Cadastrar Tipo de ingrediente</a>
        </Link>
        <Link href="/dashboardIngredient">
          <a>Cadastrar Ingrediente</a>
        </Link>
        <Link href="/product">
          <a>Cadastrar Produto</a>
        </Link>
        <Link href="#">
          <a onClick={logout}>Sair</a>
        </Link>
      </div>

      <small onClick={() => setIsOpen(!open)} className="userName">
        {user?.name}
        <img onClick={() => setIsOpen(!open)} className="imageLogo" src="/images/default.png"></img>
      </small>
    </header>
  );
};
