import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toast } from "../Toast";
import { useAuth } from "../../Context/AuthContext";

import {IngredientType} from "../../Types/BurgerType";

type FormData = {
  name: string;
  description: string;
}



const TypeIngredient = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [toastType, setToastType] = useState<"success" | "danger">("danger");
  const [toastIsOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");
  const [typeIngredient, setTypeIngredient] = useState(); // para passar os tipos de ingredientes cadastrados

  const {token} = useAuth();

  const { register, handleSubmit } = useForm<FormData>();

  // const typeIngredientLoad = (date) => {
  //   axios.get<IngredientType>('/ingredients/types', date, {})
  // }

  const onSubmit:SubmitHandler<FormData> = (data) => {
    console.log(data);
    axios.post('/ingredients/types', data, {
      baseURL: process.env.API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data)=>{
      console.log(data, {status: 200})
    }).catch((err)=>{
      console.error(err);
    })
  }

  return (

    <form id="type-ingredients" onSubmit={handleSubmit(onSubmit)}>
      <h2>Adicionar um tipo de ingrediente</h2>
      <div className="field">
        <input type="text" id="name" {...register('name', {required: 'inserir um nome do ingredient'})} />
        <label htmlFor="name">Nome do Ingrediente</label>
      </div>
      <div className="field">
        <input type="text" id="description-ingredient-type" {...register('description', {required: 'inserir o descrição ingrediente'})} />
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
