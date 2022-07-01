import Sharednav from "./sharednav";
import Productitem from "./productitem";
import Productlink from "./productlink";
import Productitm from "./productitm";
import Advert from "./advert";
import Footer from "./footer";
function speaker() {
  return (
    <div>
      <section>
        <Sharednav title="SPEAKERS" />
        <Productitem
          imageone={require("../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg")}
          imagetwo={require("../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg")}
          imagetre={require("../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg")}
          name="ZX7 SPEAKER"
          detail="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        />
        <Productitm
          imageone={require("../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg")}
          imagetwo={require("../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg")}
          imagetre={require("../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg")}
          name="ZX9 SPEAKER"
          detail="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        />
        <Productlink />
        <Advert />
        <Footer />
      </section>
    </div>
  );
}
export default speaker;
