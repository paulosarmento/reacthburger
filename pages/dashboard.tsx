import { NextPage } from "next";
import Link from "next/link";
import { HeaderAdmin } from "../Components/HeaderAdmin";
import Ingredient from "../Components/Ingredient";
import TypeIngredient from "../Components/TypeIngredients";

const Dashboard: NextPage = () => {
  return (
    <>
      <section>
        <HeaderAdmin />
        <main>
          <header className="page-title">
            <h1>
              Dados dos <span>Ingredientes</span>
            </h1>
          </header>
          <div className="form-ingredients">
            <TypeIngredient />
            <Ingredient />
          </div>
          <div className="btn-back">
            <Link href="/">
              <a className="btnBack">VOLTAR</a>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
