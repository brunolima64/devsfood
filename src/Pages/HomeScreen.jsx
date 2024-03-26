"use client";
import { useContext, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { getCategories, getProduct, getProducts } from "@/Api";

import { CategoryItem } from '@/components/CategoryItem';
import { Modal } from "@/components/Modal";
import { Cart } from "@/components/Cart";
import { ListProducts } from "@/components/ListProducts";

import { ContextCount } from "@/contexts/ContextCount";
import { ContextResults } from "@/contexts/ContextResults";
import { ContextListCart } from "@/contexts/ContextListCart";


export const HomeScreen = () => {
    const cxtResult = useContext(ContextResults);
    const cxtCount = useContext(ContextCount);
    const ctxListCart = useContext(ContextListCart);

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // Produtos filtrados

    const [productModal, setProductModal] = useState(); //produto do modal;
    const [activeCategorie, setActiveCategorie] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const [searchInput, setSearchInput] = useState('');

    const timer = () => {
        setTimeout(() => {
            const input = searchInput.toLocaleLowerCase();
            
            if(searchInput !== '') {
                const newList = products.filter((p) => 
                    p.name.toLowerCase().includes(input)
                );
                setFilteredProducts(newList);
            } else {
                setFilteredProducts(products);
            }
        }, 1000);
    }
    useEffect(()=>{ 
        timer();
    }, [searchInput, products])
   

    // função para setar o item do modal no carrinho
    const handleItemCart = () => {
        const verificationEqualProduct = ctxListCart?.listCart.some(item => item.id === productModal.id);

        if(!verificationEqualProduct) {
            let newList = [...ctxListCart?.listCart];
            newList.push(productModal);//Adiciona o novo item ao carrinho
            ctxListCart?.setListCart(newList); // Atualiza o estado do carrinho

            setShowModal(!showModal); //fecha o modal
            cxtResult?.setResult(cxtResult?.result + productModal.price)//seta o preço original do produto;
        } else {
            alert("O item já está no carrinho!");
            setShowModal(!showModal); //fecha o modal
        }
}

    // função para abrir o modal com o item especifico.
    const handleShowModal = async (itemId) => {
        const prodItem = await getProduct(itemId);
        if (prodItem.error === '') {
            setProductModal(prodItem.result);
            cxtCount?.setCount(1); // seto o contexto para 1 quando abrir um novo item
        }
        setShowModal(!showModal);
    };

	useEffect(()=>{
		const cat = async () => {
			const cat = await getCategories();
			if(cat.error === '') setCategories(cat.result)
		}
		cat();
	}, [])

    useEffect(()=>{
		const prod = async () => {
			const prod = await getProducts();
			if(prod.error === '') setProducts(prod.result.data)
		}
		prod();
	}, [])
    
    return (
        <div className="h-screen flex-1 p-3 bg-center" style={{backgroundImage: "url('assets/bg1.jpg')"}}>
            <Cart />
            {productModal && showModal &&
                <Modal 
                    setOnModal={handleShowModal}
                    productModal={productModal} 
                    addItemCart={handleItemCart}
                />
            }

            <div className="bg-red-900 p-3 mb-8 px-8 flex items-center justify-between rounded-md">
                <img 
                    className="w-64 my-4 h-auto"
                    src="/assets/logo.png" 
                />
                <div className="flex items-center bg-white rounded-xl p-1">
                    <SearchIcon className='text-xl mx-2 border-r border-gray-700'/>
                    <input 
                        className="p-3 text-black outline-none rounded-md" 
                        type="text" 
                        placeholder="Digite por algo..."
                        value={searchInput}
                        onChange={(e)=>setSearchInput(e.target.value)}
                    />
                </div>
            </div>

            <div className='max-w-72 p-2 text-lg font-bold bg-red-900 text-white shadow-lg rounded-md'>
                <p className='p-2 text-lg text-white border-b border-white'>selecione uma categoria:</p>
                <div className='flex'>
                    <div 
                        className="w-16 flex mr-2 mt-3 border border-red-900 bg-red-200 rounded-md cursor-pointer hover:bg-red-300"
                        onClick={()=>setActiveCategorie(0)}
                    >
                        <img className="w-full p-2" src="/assets/food-and-restaurant.png"  />
                    </div>
                    {categories.map((item, index) => (
                        <CategoryItem 
                            key={index+1} 
                            url={item.image} 
                            data={item}
                            setActive={setActiveCategorie}
                        />
                    ))}
                </div>
            </div>
            
            <div className='mt-4 p-4 bg-red-900 shadow-lg rounded-md'> 
                {products &&
                <div className='grid grid-cols-3 gap-4'>
                    {filteredProducts.map((item, index) => (
                        <>
                            {item.id_cat === activeCategorie &&
                                <ListProducts key={index+1} 
                                data={item}
                                activeCategorie={activeCategorie}
                                onModal={showModal}
                                setOnModal={()=>handleShowModal(item.id)}/>
                            }
                            {activeCategorie === 0 &&
                                <ListProducts key={index+1} 
                                data={item}
                                activeCategorie={activeCategorie}
                                onModal={showModal}
                                setOnModal={()=>handleShowModal(item.id)}/>
                            }
                        </>
                    ))}
                </div>
                }
                
                {activeCategorie === 3 &&
                    <p className="text-white text-md">items esgotados.</p>
                }
            </div>
        </div>
    )
}