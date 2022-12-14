import { useState } from "react";
import { Toast } from "../Toast";

const TypeIngredient = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [toastType, setToastType] = useState<"success" | "danger">("danger");
  const [toastIsOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");

  return (
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
    </form>
  );
};

export default TypeIngredient;
