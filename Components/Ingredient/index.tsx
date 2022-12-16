import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { Toast } from "../Toast";

const Ingredient = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [toastType, setToastType] = useState<"success" | "danger">("danger");
  const [toastIsOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");
  const [ingredientsTypes, setIngredientsTypes] = useState<FormData[]>([]);
  const { token } = useAuth();
  const router = useRouter();

  type FormData = {
    id: string;
    name: string;
    description: string;
    price: number;
    ingredient_type_id: number;
  };

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios
      .post("/ingredients", data, {
        baseURL: process.env.API_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => router.push("/"))
      .catch((err) => {
        console.error(err);
      });
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
    <form id="ingredients" onSubmit={handleSubmit(onSubmit)}>
      <h2>Adicionar um ingrediente</h2>
      <div className="field">
        <select
          id="select-ingrendient"
          {...register("ingredient_type_id", { required: "inserir um id" })}
        >
          <option value="0">Selecione o tipo de ingrediente</option>
          {ingredientsTypes.map(({ id, description }) => (
            <option key={id} value={id}>
              {description}
            </option>
          ))}
        </select>
        <label htmlFor="name">Qual tipo de ingrediente</label>
      </div>
      <div className="field">
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "inserir um nome do ingredient",
          })}
        />
        <label htmlFor="name-ingredient">Nome do ingrediente</label>
      </div>
      <div className="field">
        <input
          type="text"
          id="description"
          {...register("description", {
            required: "inserir um descrição do ingredient",
          })}
        />
        <label htmlFor="description-ingredient">Descrição do ingrediente</label>
      </div>
      <div className="field">
        <input
          type="text"
          id="price"
          {...register("price", { required: "inserir o preço do ingrediente" })}
        />
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
