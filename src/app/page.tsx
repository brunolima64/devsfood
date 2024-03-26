"use client";

import { Link, Route, Routes } from "react-router-dom";
import { HomeScreen } from '@/Pages/HomeScreen';
import { Profile } from '@/Pages/Profile';
import { Order } from '@/Pages/Order';

import { IconItem } from "@/components/IconItem";

import { CountProvider } from "@/contexts/ContextCount";
import { ResultProvider } from "@/contexts/ContextResults";
import { ListProductsProvider } from "@/contexts/ContextListCart";

export const Page = () => {
	
  return (
	<CountProvider>
		<ResultProvider>
			<ListProductsProvider>
				<div className="overflow-y-hidden overflow-x-hidden  h-screen w-screen flex">
					<div className="h-screen w-20 bg-red-900 left-0 top-0 bottom-0 flex flex-col items-center justify-center">
						<Link to="/">
							<IconItem url="/assets/store.png" />
						</Link>
						<Link to="/order">
							<IconItem url="/assets/order.png" />
						</Link>
						<Link to="/profile">
							<IconItem url="/assets/profile.png"/>
						</Link>
					</div>
						<Routes>
							<Route path="/" element={<HomeScreen />}/>
							<Route path="/profile" element={<Profile />}/>
							<Route path="/order" element={<Order />}/>
						</Routes>
					<div>
					</div>
				</div>
			</ListProductsProvider>
		</ResultProvider>
	</CountProvider>
  )
}
export default Page;