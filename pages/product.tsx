import { NextPage } from "next";
import Link from "next/link";
import { HeaderAdmin } from "../Components/HeaderAdmin";
import Ingredient from "../Components/Ingredient";
import Products from "../Components/Products";

const Product: NextPage = () => {
  return (
    <>
      <section>
        <HeaderAdmin />
        <main>
          <header className="page-title">
            <h1>
              Dados dos <span>Produto</span>
            </h1>
          </header>
          <Products />
          <div className="btn-back">
            <Link href="/dashboard">
              <a className="btnBack">VOLTAR</a>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};
export default Product;
