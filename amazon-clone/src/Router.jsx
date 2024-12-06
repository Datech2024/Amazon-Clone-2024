import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51QRPu3Dyaa643wMWuOt4wEuVXCecERWQEE8A53yMeMZ6gVmTMHxo47urtPlcypZSJr7smaoNo3Gql5qbkR5RVioZ00MMPcoVZG"
);

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/payments"
					element={
						<Elements stripe={stripePromise}>
							<Payment />
						</Elements>
					}
				/>
				<Route path="/orders" element={<Orders />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="category/:categoryName" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
