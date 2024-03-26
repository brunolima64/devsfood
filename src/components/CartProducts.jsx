import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useState } from 'react';
import { ContextCount } from '@/contexts/ContextCount';
import { ContextResults } from '@/contexts/ContextResults';
import { ContextListCart } from '@/contexts/ContextListCart';

export const CartProducts = (item) => {

    const cxtCount = useContext(ContextCount);
    const cxtResult = useContext(ContextResults); // total da compra
    const ctxListCart = useContext(ContextListCart);

    const [countItemsCart, setCountItemsCart] = useState(cxtCount?.count);
    
    //função para remover o item do carrinho
    const handleDeleteProductCart = () => {
        let newList = [...ctxListCart?.listCart];
        newList = newList.filter((i) => item.item.id !== i.id)
        ctxListCart?.setListCart(newList)
    }

    const handlePrev = () => {
        if(countItemsCart > 1) {
            cxtResult?.setResult(cxtResult?.result - item.item.price);
            setCountItemsCart(countItemsCart - 1);
        } 
        else if(countItemsCart === 1) {
            cxtResult?.setResult(cxtResult?.result - item.item.price);//remover o preco do total.
            handleDeleteProductCart();
        }
    }
    
    const handleNext = () => {
        if(countItemsCart) {
            cxtResult?.setResult(cxtResult?.result + item.item.price);
            setCountItemsCart(countItemsCart + 1);
        }
    } 
    
    return (
        <div className='m-2 flex items-center overflow-auto'>
            <div className='mr-2'>
                <img 
                    className='w-24 rounded-md' 
                    src={item.item.image} alt=""
                />
            </div>
            <div className='flex flex-col flex-1'>
                <h1 className='font-bold text-lg'>{item.item.name}</h1>
                <p className="font-semibold">R$ {(item.item.price * countItemsCart).toFixed(2)}</p>
                <p className='text-sm'>{item.item.ingredients}</p>
            </div>

            <div className='flex'>
                <RemoveIcon onClick={handlePrev} style={{fontSize: 20, cursor: 'pointer'}}/>
                <div className="mx-2">{countItemsCart}</div>
                <AddIcon onClick={handleNext} style={{fontSize: 20, cursor: 'pointer'}}/>
            </div>
        </div>
    )
}