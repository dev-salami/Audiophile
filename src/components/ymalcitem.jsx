function productitem(props) {
  return (
    <section>
      <div className="flex flex-col  justify-center items-center space-y-12  max-w-[400px] max-h-[400px]">
        <div className="bg-[#f2f2f2]  max-w-[300px] max-h-[300px] flex justify-center items-center">
          <img className="" src={props.image} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <p>{props.text}</p>
          <button>
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
  );
}
export default productitem;
