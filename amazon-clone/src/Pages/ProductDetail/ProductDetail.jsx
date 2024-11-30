import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/EndPoints.jsX";

function ProductDetail() {
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	useEffect(() => {
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	return (
		<LayOut>
			<div>
				<ProductCard product={product} />
			</div>
		</LayOut>
	);
}

export default ProductDetail;
