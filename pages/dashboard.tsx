import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { HeaderAdmin } from "../Components/HeaderAdmin";
import { Toast } from "../Components/Toast";

const Dashboard: NextPage = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [toastType, setToastType] = useState<"success" | "danger">("danger");
  const [toastIsOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");

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
            <form id="type-ingredients">
              <h2>Adicionar um tipo de ingrediente</h2>
              <div className="field">
                <input type="text" id="name" />
                <label htmlFor="name">Nome do Ingrediente</label>
              </div>
              <div className="field">
                <input type="text" id="description-ingredient-type" />
                <label htmlFor="description-ingredient-type">
                  Descrição do ingrediente
                </label>
              </div>

              <Toast type={toastType} open={toastIsOpen}>
                <p>{error}</p>
              </Toast>
              <footer>
                <button type="submit" disabled={formIsLoading}>
                  {formIsLoading ? "Salvando" : "Salvar"}
                </button>
              </footer>
              <Link href="/">
                <a className="btnBack">VOLTAR</a>
              </Link>
            </form>
            <form id="ingredients">
              <h2>Adicionar um ingrediente</h2>
              <div className="field">
                <select id="name">
                  <option value="" />
                </select>
                <label htmlFor="name">Qual tipo de ingrediente</label>
              </div>
              <div className="field">
                <input type="text" id="description-ingredient" />
                <label htmlFor="description-ingredient">
                  Descrição do ingrediente
                </label>
              </div>
              <div className="field">
                <input type="text" id="valor-ingredient" />
                <label htmlFor="valor-ingredient">
                  Valor
                </label>
              </div>

              <Toast type={toastType} open={toastIsOpen}>
                <p>{error}</p>
              </Toast>
              <footer>
                <button type="submit" disabled={formIsLoading}>
                  {formIsLoading ? "Salvando" : "Salvar"}
                </button>
              </footer>
              <Link href="/">
                <a className="btnBack">VOLTAR</a>
              </Link>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
