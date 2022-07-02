import Fade from "react-reveal/Fade";
function productitem(props) {
  return (
    <Fade duration={1000} delay={500} right={true} fraction={0.2}>
      <section className="container mx-auto pt-28 ">
        <div className="flex justify-around items-center flex-col  lg:flex-row-reverse md:space-x-6 md:space-y-0 space-y-6">
          <div className="lg:max-w-[35%] max-w-[80%]">
            <img
              className="hidden lg:block"
              src={props.imageone}
              alt="product"
            />
            <img
              className="hidden sm:block lg:hidden"
              src={props.imagetwo}
              alt="product"
            />
            <img className="sm:hidden" src={props.imagetre} alt="product" />
          </div>
          <div className="lg:max-w-[30%] max-w-[60%] flex flex-col  space-y-1 ">
            <h1 className="text-[#D87D4A] text-center  lg:text-left">
              NEW PRODUCT
            </h1>
            <h3 className="pb-2 text-center text-gray-800 lg:text-left text-5xl">
              {props.name}
            </h3>
            <p className="text-gray-400 text-center  md:text-left ">
              {props.detail}
            </p>
            <button className="pt-4  lg:text-left">
              <a
                className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
                href="/"
              >
                SEE PRODUCT
              </a>
            </button>
          </div>
        </div>
      </section>
    </Fade>
  );
}
export default productitem;
