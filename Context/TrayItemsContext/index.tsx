import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TrayItemsTypes } from "../../Types/Contexts/TrayItemsTypes";

type TrayItemsTypesProps = {

    burger: TrayItemsTypes[],
    aditionals: TrayItemsTypes[],
    subtotal: number;
    removeAditionals: (aditionals: any) => void;
    removeBurger: (burger: any) => void;
    setBurger: (burger: any) => void;
    addAditionals: (aditionals: any) => void;
    setSubTotal: (subtotal: number) => void;
    addBurger: (burger: any) => void;
}

const TrayItemsContext = createContext<TrayItemsTypesProps>({
    aditionals: [],
    burger: [],
    subtotal: 0,
    removeAditionals: () => { },
    removeBurger: () => { },
    setBurger: () => { },
    addAditionals: () => { },
    setSubTotal: () => { },
    addBurger: () => { }
});

export default function TrayItemsProvider({ children }: { children: ReactNode }) {

    const [burger, setBurger] = useState<TrayItemsTypes[]>([]);
    const [aditionals, setAditionals] = useState<TrayItemsTypes[]>([]);
    const [subtotal, setSubTotal] = useState<number>(0);

    const [burgerValues, setBurgerValues] = useState<number[]>([])
    const [aditionalsValues, setAditionalsValues] = useState<number[]>([])

    const addBurger = ({ id, name, price }: { id: number; name: string; price: number; }) => {

        const newArray = [...burgerValues, Number(price)];
              
        setBurgerValues(newArray);

    }

    useEffect(()=>{

        console.log('values',values)
       
        const sum = values.reduce((a, b) => a + b, 0);
        
        setSubTotal(sum);

    },[aditionalValues])

    const removeBurger = (id: number) => {
        // burger.filter(({ id }) => id !== id);

    }

    const addAditionals = ({ id, name, price }: { id: number; name: string; price: number; }) => {

        const newAditionals = [...aditionals, { id, name, price }];

        setAditionalValues([Number(price), ...values]);

        setAditionals(newAditionals);

    }

    const removeAditionals = ({id}:{id:number}) => {

        const aditional = aditionals.find((item)=> item.id === id);

        if (aditional) {
            const filtered = aditionals.filter((item) => item.id !== id);

            aditionalValues.splice(aditionalValues.indexOf(Number(aditional.price)), 1);

            setAditionalValues([...aditionalValues]);


            console.log('newvalues',aditionalValues)


            setAditionals(filtered)
        }


    }

    return (
        <TrayItemsContext.Provider value={
            {
                aditionals,
                burger,
                subtotal,
                removeAditionals,
                setBurger,
                removeBurger,
                addAditionals,
                setSubTotal,
                addBurger
            }
        }>
            {children}
        </TrayItemsContext.Provider>
    );

}

export function useTrayItems() {
    const context = useContext(TrayItemsContext);

    if (!context) {
        throw new Error("Only use useTray's context within a TrayProvider, or you will broken the application");
    }

    return context;
}