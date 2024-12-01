import React from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

function Auth() {
	return (
		<section className={classes.login}>
			{/* logo */}
			<Link>
				<img src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
			</Link>

			{/* form */}
			<div className={classes.login__container}>
				<h1>Sign In</h1>
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button className={classes.login__signInButton}>Sign In</button>
				</form>
				<p>
					By signing-in you agree to AMAZON FAKE CLONE Conditions of use & sale. Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
				</p>
				{/* Create account btn */}
				<button className={classes.login__registerButton}>Create your Amazon Account</button>
			</div>
		</section>
	);
}

export default Auth;
