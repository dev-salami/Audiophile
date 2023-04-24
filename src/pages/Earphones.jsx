import Sharednav from "../components/sharednav";
import Productitem from "../components/productitem";
import Productlink from "../components/productlink";
import Advert from "../components/advert";
import Footer from "../components/footer";

function Earphones() {
	return (
		<>
			<Sharednav title="HEARPHONES" />
			<Productitem
				imageone={require("../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg")}
				imagetwo={require("../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg")}
				imagetre={require("../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg")}
				name="YX1 WIRELESS EARPHONES"
				detail="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
			/>
			<Productlink />
			<Advert />
			<Footer />
		</>
	);
}
export default Earphones;
