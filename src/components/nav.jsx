import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "./cart";
import { toggleCart } from "../Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
	// const showCart = useSelector((state) => state.cart.showCart);
	const dispatch = useDispatch();
	const toggleCartFn = () => {
		dispatch(toggleCart());
	};
	const [Open, setOpen] = useState(false);
	const handleClick = () => setOpen(!Open);
	return (
		<section className="bg-black fixed top-0 left-0 right-0 z-[500] m h-fit sm:h-[105px]  flex items-center justify-center">
			<Cart />
			<div className="text-white space-y-2 sm:space-y-0 mx-auto container py-8 px-4 flex flex-col sm:flex-row justify-between border-b-[1px] mb-1 border-gray-400">
				<span className="font-bold text-2xl ">Audiophile</span>
				<div>
					<ul className="sm:space-y-0 space-y-4 text-sm mt-3 sm:flex flex-row space-x-4 hidden">
						<li className="transition ease-in-out duration-700 hover:text-orange-400">
							<a href="/">HOME</a>
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
						<button onClick={toggleCartFn}>Cart</button>
					</ul>
				</div>
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
							<a href="/Speaker">SPEAKERS</a>
						</li>
						<li className="transition ease-in-out duration-700 hover:text-orange-400">
							<a href="/Earphones">EARPHONES</a>
						</li>
					</ul>
				</div>
				<button
					onClick={handleClick}
					className="bg-orange sm:hidden focus:outline-none hover:text-orange-400 transition ease-in-out duration-700 absolute top-[48px] right-4 z-[999]">
					<span className="w-8 h-8   ">
						{/* {setOpen  <Menu /> : <Close />} */}
						{!Open ? <FaBars /> : <FaTimes />}
					</span>
				</button>
			</div>
		</section>
	);
}
export default Nav;
// className={
//     !Open
//       ? "res sm:space-y-0 space-y-4 text-lg sm:flex flex-row space-x-4  "
//       : "sm:space-y-0 space-y-4 text-lg sm:flex flex-row space-x-4 hidden"
//   }
