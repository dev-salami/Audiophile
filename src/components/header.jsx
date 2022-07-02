import image from "../assets/home/desktop/image-her.jpg";
import imaget from "../assets/home/tablet/image-header.jpg";
import Zoom from "react-reveal/Zoom";

function header() {
  return (
    <Zoom>
      <section className="bg-[#191919] py-4  ">
        <div className="lg:flex container  hidden  mx-auto justify-around">
          <div className="md:max-w-[30%] max-w-[60%] flex flex-col pt-16  space-y-4 ">
            <h1 className="text-gray-400 text-center  md:text-left">
              NEW PRODUCT
            </h1>
            <h3 className="pb-2 text-center text-white md:text-left text-5xl">
              XX99 MARK II HEADPHONES
            </h3>
            <p className="text-gray-400 text-center  md:text-left ">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="pt-4  md:text-left">
              <a
                className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
                href="/"
              >
                SEE PRODUCT
              </a>
            </button>
          </div>
          <div className="lg:max-w-[50%] ">
            <img className="w-full" src={image} alt="product" />
          </div>
        </div>
        {/* //SEPERATE */}
        <div className="bg">
          <div className="flex justify-center items-center     lg:hidden  mx-auto  ">
            <div className="md:max-w-[25%] max-w-[60%] z-50 absolute flex flex-col    ">
              <h1 className="text-gray-400 text-center  ">NEW PRODUCT</h1>
              <h3 className="pb-2 text-center text-white self-center  text-5xl">
                XX99 MARK II HEADPHONES
              </h3>
              <p className="text-gray-400 text-center   ">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="pt-4  ">
                <a
                  className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
                  href="/"
                >
                  SEE PRODUCT
                </a>
              </button>
            </div>
            <div className="max-w-[800px] mx-auto  ">
              <img className="w-full " src={imaget} alt="product" />
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
}
export default header;
