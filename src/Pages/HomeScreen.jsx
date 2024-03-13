"use client";
import { useEffect, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';

import { getCategories, getProducts } from "@/Api";

import { CategoryItem } from '@/components/CategoryItem';
import { ProductsItems } from '@/components/ProductsItems';

export const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

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
                    <CategoryItem url='assets/food-and-restaurant.png' />
                    {categories.map((item, index) => (
                        <CategoryItem key={index} url={item.image} />
                    ))}
                </div>
            </div>

            <div className='mt-4 p-4 bg-red-800 shadow-lg rounded-md'>
                <div className='grid grid-cols-3 gap-4'>
                    {products.map(item => (
                        <ProductsItems data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}