import React from "react";
import product from "../data";
import { useParams } from "react-router-dom";
function Product() {
	const { name } = useParams();
	const item = product.find((product) => product.link === name);

	console.log(item);
	return <div>Product</div>;
}

export default Product;
