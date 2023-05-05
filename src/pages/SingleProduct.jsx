import React from "react";
import product from "../data";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Advert from "../components/Advert";
import g from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

function SingleProduct() {
	const { name } = useParams();
	const item = product.find((product) => product.link === name);

	console.log(item);
	return (
		<div>
			<section className="container mx-auto pt-28 ">
				<div className="flex justify-around items-center flex-col  lg:flex-row md:space-x-6 md:space-y-0 space-y-6">
					<div className="lg:max-w-[35%] max-w-[80%]">
						<img
							className="hidden lg:block"
							src={g}
							alt="product"
						/>
					</div>
					<div className="lg:max-w-[30%] max-w-[60%] flex flex-col  space-y-2 ">
						<h1 className="text-[#D87D4A] text-center  lg:text-left">
							NEW PRODUCT
						</h1>
						<h3 className="pb-2 text-center text-gray-800 lg:text-left text-5xl">
							XY1 headphones
						</h3>
						<p className="text-gray-400 text-center  md:text-left ">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
							placeat impedit nihil, minima architecto sint dolorem perspiciatis
							repudiandae veritatis ipsam et unde neque dicta cumque. Molestiae
							quibusdam velit aspernatur nam!
						</p>
						<button className="pt-4  lg:text-left">
							<a
								className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
								href="/">
								SEE PRODUCT
							</a>
						</button>
						<div className="flex flex-row items-center pt-8 space-x-8">
							<button
								// onClick={() => {
								// 	dispatch(increase());
								// 	console.log("salami");
								// }}
								className="text-2xl outline-none">
								+
							</button>
							<p className="text-xl">5</p>
							<button className="text-2xl outline-none">-</button>
							<button className="outline-none hover:bg-[#d87d4a] bg-[#fbaf85] text-white ml-8 py-2 px-4 text-md">
								ADD TO CART
							</button>
						</div>
					</div>
				</div>
			</section>{" "}
			<Advert />
			<Footer />
		</div>
	);
}

export default SingleProduct;
