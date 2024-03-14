"use client";
import { useEffect, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';

import { getCategories, getProducts } from "@/Api";

import { CategoryItem } from '@/components/CategoryItem';
import { ProductsItems } from '@/components/ProductsItems';

export const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const [activeCategorie, setActiveCategorie] = useState(0);
    const [activeProducts, setActiveProducts] = useState(0);
    

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
        <div
            className="h-screen flex-1 p-3 bg-center"
            style={{backgroundImage: "url('assets/bg1.jpg')"}}
        >
            <div className="bg-red-800 p-3 mb-8 px-8 flex items-center justify-between rounded-md">
                <img 
                    className="w-64 my-4 h-auto"
                    src="/assets/logo.png" 
                />  
                <div className="flex items-center bg-white rounded-xl p-1">
                    <SearchIcon className='text-xl mx-2 border-r border-gray-700'/>
                    <input 
                        className="p-3 text-black outline-none rounded-md" 
                        type="text" 
                        placeholder="Busque algo..."

                />
                </div>
            </div>

            <div className='max-w-72 p-2 text-lg font-bold bg-red-800 text-white shadow-lg rounded-md'>
                <p className='p-2 text-lg font-bold bg-red-700 text-white shadow-lg rounded-md'>selecione uma categoria:</p>
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
            

            <div className='mt-4 p-4 bg-red-800 shadow-lg rounded-md'> 
                {products &&
                <div className='grid grid-cols-3 gap-4'>
                    {products.map(item => (
                        <ProductsItems 
                            data={item}
                            activeCategorie={activeCategorie}
                        />
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