import Sharednav from "./sharednav";
import Productitem from "./productitem";
import Productlink from "./productlink";
import Advert from "./advert";
import Footer from "./footer";

function Earphones() {
  return (
    <section>
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
    </section>
  );
}
export default Earphones;
