import { useState } from "react";
import { Toast } from "../Toast";

const Ingredient = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [toastType, setToastType] = useState<"success" | "danger">("danger");
  const [toastIsOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");
  return (
    <form id="ingredients">
      <h2>Adicionar um ingrediente</h2>
      <div className="field">
        <select id="select-ingrendient">
          <option value="0" selected>
            Selecione o tipo de ingrediente
          </option>
          <option value="1">Carnes</option>
          <option value="2">Pães</option>
          <option value="3">Saladas</option>
        </select>
        <label htmlFor="name">Qual tipo de ingrediente</label>
      </div>
      <div className="field">
        <input type="text" id="description-ingredient" />
        <label htmlFor="description-ingredient">Descrição do ingrediente</label>
      </div>
      <div className="field">
        <input type="text" id="valor-ingredient" />
        <label htmlFor="valor-ingredient">Valor</label>
      </div>

      <Toast type={toastType} open={toastIsOpen}>
        <p>{error}</p>
      </Toast>
      <footer>
        <button type="submit" disabled={formIsLoading}>
          {formIsLoading ? "Salvando" : "Salvar"}
        </button>
      </footer>
    </form>
  );
};

export default Ingredient;
