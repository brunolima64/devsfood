import { useContext, useState } from "react";
import { CartProducts } from '@/components/CartProducts';
import { ContextResults } from "@/contexts/ContextResults";
import { ContextListCart } from "@/contexts/ContextListCart";

export const Cart = () => {

    const ctxListCart = useContext(ContextListCart); // teste
    const cxtResult = useContext(ContextResults); // total da compra

    const [openedCart, setOpenedCart] = useState(false);

    const handleOpenedCart = () => {
        setOpenedCart(!openedCart);
    }
    
    return (
        <div 
            className={`max-h-svh ${!openedCart ? 'h-16' : ''} ${openedCart ? 'overflow-auto' : ''}
            w-96 mr-24 p-2 bottom-0 right-0 fixed flex flex-col bg-red-900 text-white
            shadow-lg shadow-black rounded-t-md`}
        >
            <div 
                className={`flex items-center p-2 border-b border-white cursor-pointer`}
                onClick={handleOpenedCart} 
            >
                <img className="w-8 h-auto mr-2" src="/assets/cart.png" />
                <p>Carrinho de compras  ({ctxListCart?.listCart.length})</p>
            </div>
        
            {ctxListCart?.listCart.map((item, index) => (
                <CartProducts key={index} item={item} />
            ))}
            
            {cxtResult?.result !== 0 &&
                <div className="flex justify-between m-2 font-bold">
                    <p>Total:</p>
                    <p>R$ {cxtResult?.result.toFixed(2)}</p>
                </div>
            }
           
            {cxtResult?.result !== 0 &&
                <button className="w-full mt-2 bg-red-800 text-white p-3 rounded-md hover:bg-red-700">Finalizar Compra</button>
            }   
        </div>
        
    )
}