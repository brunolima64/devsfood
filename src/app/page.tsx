"use client";

import { Route, Routes } from "react-router-dom"
import { HomeScreen } from '@/Pages/HomeScreen';
import { IconItem } from "@/components/IconItem";
import { Cart } from "@/components/Cart";

export const Page = () => {
	
  return (
	<div className="overflow-y-hidden overflow-x-hidden  h-screen w-screen flex">
		<div className="h-screen w-20 bg-red-800 left-0 top-0 bottom-0 flex flex-col items-center justify-center">
			<IconItem url="/assets/store.png" />
			<IconItem url="/assets/order.png" />
			<IconItem url="/assets/profile.png" />
		</div>
		<Routes>
			<Route path="/" element={<HomeScreen />}/>
		</Routes>
		<div>
			<Cart />
		</div>
	</div>
  )
}
export default Page;