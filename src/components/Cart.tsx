import { useState } from "react"

export const Cart = () => {
    const [openedCart, setOpenedCart] = useState(false);
    
    const handleOpenedCart = () => {
        setOpenedCart(!openedCart);
    }
    return (
        <div 
            onClick={handleOpenedCart} 
            className={`w-72 ${openedCart ? 'h-96' : ''} mr-24 px-4 py-2 bottom-0 right-0 fixed flex flex-col bg-red-800
            text-white rounded-t-md cursor-pointer`}
        >
        <div className="flex items-center">
            <img className="w-8 h-auto mr-2" src="/assets/cart.png" />
            <p>Carrinho de compras  (x)</p>
        </div>
        </div>
    )
}