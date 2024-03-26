import { CategoryType } from "@/types/CategoryType";
import { ReactNode, createContext, useState } from "react";

type ListProductsType = {
    listCart: CategoryType[];
    setListCart: (item: any) => void;
}
export const ContextListCart = createContext<ListProductsType | null>(null);

type Props = { children: ReactNode; } 
export const ListProductsProvider = ({children}: Props) => {
    const [listCart, setListCart] = useState([]);

    return (
        <ContextListCart.Provider value={ {listCart, setListCart} }>
            {children}
        </ContextListCart.Provider>
    )
}