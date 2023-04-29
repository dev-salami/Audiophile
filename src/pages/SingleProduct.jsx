import React from "react";
import product from "../data";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Advert from "../components/Advert";
function SingleProduct() {
	const { name } = useParams();
	const item = product.find((product) => product.link === name);

	console.log(item);
	return (
		<div>
			<div>Product</div>
			<Advert />
			<Footer />
		</div>
	);
}

export default SingleProduct;
