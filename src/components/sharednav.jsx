import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Sharednav(props) {
  const [Open, setOpen] = useState(false);
  const handleClick = () => setOpen(!Open);
  return (
    <div className="bg-black">
      <section className="  py-4 flex flex-col space-y-4 items-center justify-center">
        <div className="text-white space-y-2  sm:space-y-0 mx-auto container py-8 px-4 flex flex-col sm:flex-row justify-between border-b-[1px] mb-1 border-gray-400">
          <span className="font-bold text-2xl ">Audiophile</span>

          <ul className="sm:space-y-0 space-y-4 text-sm mt-3 sm:flex flex-row  space-x-12 max-w-[1000px] items-center hidden">
            <li className="transition ease-in-out duration-700 hover:text-orange-400">
              <a href="/Home">HOME</a>
            </li>
            <li className="transition ease-in-out duration-700 hover:text-orange-400">
              <a href="/Headphones">HEADPHONES</a>
            </li>
            <li className="transition ease-in-out duration-700 hover:text-orange-400">
              <a href="/Speakers">SPEAKERS</a>
            </li>
            <li className="transition ease-in-out duration-700 hover:text-orange-400">
              <a href="/Earphones">EARPHONES</a>
            </li>
          </ul>

          {/* mobile */}
          <div className={!Open && "hidden"}>
            <ul className="  text-lg flex flex-col space-y-4 sm:hidden ">
              <li className="transition ease-in-out duration-700 hover:text-orange-400">
                <a href="/Home">HOME</a>
              </li>
              <li className="transition ease-in-out duration-700 hover:text-orange-400">
                <a href="/Headphones">HEADPHONES</a>
              </li>
              <li className="transition ease-in-out duration-700 hover:text-orange-400">
                <a href="/Speakers">SPEAKERS</a>
              </li>
              <li className="transition ease-in-out duration-700 hover:text-orange-400">
                <a href="/Earphones">EARPHONES</a>
              </li>
            </ul>
          </div>
          <button
            onClick={handleClick}
            className="bg-orange sm:hidden focus:outline-none hover:text-orange-400 transition ease-in-out duration-700 absolute top-[48px] right-4 z-[999]"
          >
            <span className="w-8 h-8   ">
              {/* {setOpen  <Menu /> : <Close />} */}
              {!Open ? <FaBars /> : <FaTimes />}
            </span>
          </button>
        </div>
        <span className="font-semibold flex  text-white  text-4xl py-8">
          {props.title}
        </span>
      </section>
    </div>
  );
}
export default Sharednav;
// className={
//     !Open
//       ? "res sm:space-y-0 space-y-4 text-lg sm:flex flex-row space-x-4  "
//       : "sm:space-y-0 space-y-4 text-lg sm:flex flex-row space-x-4 hidden"
//   }
