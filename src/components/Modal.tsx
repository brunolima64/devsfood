import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { useContext } from 'react';
import { ContextCount } from '@/contexts/ContextCount';
import { ContextResults } from '@/contexts/ContextResults';

type Props = {
    setOnModal: () => void;
    productModal: any; //provisorio
    addItemCart: () => void;
}

export const Modal = ({setOnModal, productModal, addItemCart}: Props) => {
    const cxtResult = useContext(ContextResults);
    const cxtCount = useContext(ContextCount);

    const handlePrev = () => {
        if(!cxtCount?.count || cxtCount?.count > 1) {
            cxtCount?.setCount(cxtCount?.count - 1);
            cxtResult?.setResult(cxtResult?.result - productModal.price)

        } else if(cxtCount?.count === 1) {
            cxtCount?.setCount(1);
            setOnModal();
        }
    }

    const handleNext = () => {
        if(cxtCount?.count ) {
            cxtResult?.setResult(cxtResult?.result + productModal.price);
            cxtCount.setCount(cxtCount?.count + 1);
        }
    }

    return (
        <div className="left-0 top-0 fixed right-0 bottom-0 bg-black bg-opacity-90 flex justify-center items-center shadow-lg shadow-black">
            <div className=" bg-white rounded-md flex flex-col">
                
                <div className='max-w-2xl h-auto p-3'>
                <div className="flex text-red-800">
                    <div className="flex justify-center items-center w-52 mr-2 rounded-md">
                        <img 
                            className="w-full h-auto rounded-md" 
                            src={productModal.image} 
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="font-bold text-2xl">{productModal.name}</h2>
                            <p>R$ {productModal.price.toFixed(2)}</p>
                            <p className="text-sm">{productModal.ingredients}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center font-bold text-2xl">
                                <RemoveIcon onClick={handlePrev} style={{fontSize: 20, cursor: 'pointer'}}/>
                                <div className="mx-2">{cxtCount?.count}</div>
                                <AddIcon onClick={handleNext} style={{fontSize: 20, cursor: 'pointer'}}/>
                            </div>
                            <div className="font-bold text-lg">R$ {cxtCount?.count !== undefined ? (productModal.price * cxtCount?.count).toFixed(2) : cxtCount?.count === false}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex justify-end">
                    <button
                        className="bg-red-800 text-white mr-2 px-4 py-2 rounded-md"
                        onClick={setOnModal}
                        >Cancelar
                    </button>
                    <button 
                        className="bg-red-800 text-white px-4 py-2 rounded-md"
                        onClick={addItemCart}
                        >Adicionar ao Carrinho
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}