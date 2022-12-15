import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Toast } from "../Toast";

const Ingredient = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [toastType, setToastType] = useState<"success" | "danger">("danger");
  const [toastIsOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");
  const [ingredientsTypes, setIngredientsTypes] = useState<FormData[]>([]);
  const { token } = useAuth();

  type FormData = {
    id: number;
    name: string;
    description: string;
  };

  useEffect(() => {
    axios
      .get("ingredients/types", {
        baseURL: process.env.API_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIngredientsTypes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <form id="ingredients">
      <h2>Adicionar um ingrediente</h2>
      <div className="field">
        <select id="select-ingrendient">
          <option value="0">Selecione o tipo de ingrediente</option>
          {ingredientsTypes.map(({ id, name, description }) => (
            <option key={id} value={id}>
              {description}
            </option>
          ))}
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
