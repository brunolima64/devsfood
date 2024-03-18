import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

type Props = {
    setOnModal: () => void;
    prodModalProps: any; //provisorio
}

export const ModalAddCart = ({setOnModal, prodModalProps}: Props) => {
    const [countProduct, setCountProduct] = useState(1);

    const handlePrev = () => {
        if(countProduct > 1) {
            setCountProduct(countProduct - 1);
        } else if(countProduct === 1) {
            setOnModal();
        }
    }
    const handleNext = () => {
        if(countProduct) {
            setCountProduct(countProduct + 1);
            
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
                            src={prodModalProps.image} 
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="font-bold text-2xl">{prodModalProps.name}</h2>
                            <p>R$ {prodModalProps.price.toFixed(2)}</p>
                            <p className="text-sm">{prodModalProps.ingredients}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center font-bold text-2xl">
                                <RemoveIcon onClick={handlePrev} style={{fontSize: 20, cursor: 'pointer'}}/>
                                <div className="mx-2">{countProduct}</div>
                                <AddIcon onClick={handleNext} style={{fontSize: 20, cursor: 'pointer'}}/>
                            </div>
                            <div className="font-bold text-lg">R$ {(prodModalProps.price * countProduct).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex justify-end">
                    <button
                        className="bg-red-800 text-white mr-2 px-4 py-2 rounded-md"
                        onClick={setOnModal}>Cancelar
                    </button>
                    <button className="bg-red-800 text-white px-4 py-2 rounded-md">Adicionar ao Carrinho</button>
                </div>
                </div>
            </div>
        </div>
    )
}