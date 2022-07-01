import Sharednav from "./sharednav";
import Productitem from "./productitem";
import Productlink from "./productlink";
import Productitm from "./productitm";
import Advert from "./advert";
import Footer from "./footer";
function headphones() {
  return (
    <div>
      <section>
        <Sharednav title="HEADPHONES" />
        <Productitem
          imageone={require("../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg")}
          imagetwo={require("../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg")}
          imagetre={require("../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg")}
          name="XX59 HEADPHONES"
          detail="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        />
        <Productitm
          imageone={require("../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg")}
          imagetwo={require("../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg")}
          imagetre={require("../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg")}
          name="XX99 MARK I HEADPHONES"
          detail="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        />
        <Productitem
          imageone={require("../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg")}
          imagetwo={require("../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg")}
          imagetre={require("../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg")}
          name="XX99 MARK II HEADPHONES"
          detail="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
        <Productlink />
        <Advert />
        <Footer />
      </section>
    </div>
  );
}
export default headphones;
