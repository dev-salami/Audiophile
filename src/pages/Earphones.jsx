import Sharednav from "../components/sharednav";
import Productitem from "../components/productitem";
import Productlink from "../components/productlink";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Earphones() {
	return (
		<>
			<Navbar />
			<div className="h-32 md:h-52 flex justify-center items-center font-semibold text-center text-4xl bg-black text-white mt-[95px]">
				HEARPHONES
			</div>
			<Productitem
				imageone={require("../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg")}
				imagetwo={require("../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg")}
				imagetre={require("../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg")}
				name="YX1 WIRELESS EARPHONES"
				link="yx1-wireless-earphones"
				detail="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
				id="5"
			/>
			<Productlink />
			<Advert />
			<Footer />
		</>
	);
}
export default Earphones;
