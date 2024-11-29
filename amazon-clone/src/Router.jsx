import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing from "./Pages/Landing/Landing"
import SignUp from "./Pages/Auth/SignUp"
import Payment from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Orders"
import Cart from "./Pages/Cart/Cart"
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Results from "./Pages/Results/Results";



function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<SignUp />} />
				<Route path="/payments" element={<Payment />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/producs/:productId" element={<ProductDetail />} />
				<Route path="category/:categoryName" element={<Results />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
