import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import {
	useStripe,
	useElements,
	CardElement,
	PaymentElement,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Payment() {
	const [{ user, basket }] = useContext(DataContext);
	console.log(user);

	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);

	const total = basket.reduce((amount, item) => {
		return item.price * item.amount + amount;
	}, 0);

	const [cardError, setCardError] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	const handleChange = (e) => {
		console.log(e);
		e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
	};

	return (
		<LayOut>
			{/* Header */}
			<div className={classes.payment__header}>
				Checkout ({totalItem}) items
			</div>
			{/* Payment Method */}
			<section className={classes.Payment}>
				{/* addres */}
				<div className={classes.flex}>
					<h3>Delivery Adress</h3>
					<div>
						<div>{user?.email}</div>
						<div>11 React ln</div>
						<div>Maryland</div>
					</div>
				</div>
				<hr />
				{/* Product */}
				<div className={classes.flex}>
					<h3>Review items and delivery</h3>
					<div>
						{basket?.map((item) => (
							<ProductCard product={item} flex={true} />
						))}
					</div>
				</div>
				<hr />
				{/* card form */}
				<div className={classes.flex}>
					<h3>Payment Method</h3>
					<div className={classes.Payment__card__container}>
						<div className={classes.payment__details}>
							<form action="">
								{/* error */}
								{cardError && (
									<small style={{ color: "red" }}>{cardError}</small>
								)}
								{/* card element */}
								<CardElement onChange={handleChange} />
								{/* price */}
								<div className={classes.payment__price}>
									<div>
										<span style={{ display: "flex", gap: "10px" }}>
											<p>Total Price|</p> <CurrencyFormat amount={total} />
										</span>
									</div>
									<button>Pay Now</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</LayOut>
	);
}

export default Payment;
