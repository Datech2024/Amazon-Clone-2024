import React from "react";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Lowerheader from "./LowerHeader";

function Header() {
	return (
		<div>
			<section>
				<div className={classes.header_container}>
					{/* Logo section */}
					<div className={classes.logo_container}>
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
						{/* Delivery */}
						<div className={classes.delivery}>
							<span>
								<SlLocationPin />
							</span>

							<div>
								<p>Deliver to</p>
								<span>Silver Spring</span>
							</div>
						</div>
					</div>
					{/* search section */}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search Amazon" />
						<BsSearch size={25} />
					</div>
					{/* other section*/}
					<div className={classes.order_container}>
						<Link to="" className={classes.language}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/640px-Flag_of_the_United_States_%281912-1959%29.svg.png"
								alt=""
							/>
							<select name="" id="">
								<option value="">EN</option>
							</select>
						</Link>
						<Link to="" className={classes.account}>
							<p>Hellow,sign in</p>
							<select name="" id="">
								<option value="">Account & Lists</option>
							</select>
						</Link>
						<Link to="/orders">
							<p>Returns</p>
							<span>& Orders</span>
						</Link>
						<Link to="/cart" className={classes.cart}>
							<BiCart size={35} />
							<span>0</span>
						</Link>
					</div>
				</div>
			</section>
			<Lowerheader />
		</div>
	);
}

export default Header;