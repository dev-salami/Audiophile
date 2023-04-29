import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "./cart";
import { toggleCart } from "../Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
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

				<div className="sm:space-y-0 space-y-4 text-sm mt-3 sm:flex flex-row space-x-4 hidden">
					<Link
						to="/"
						className="transition ease-in-out duration-700 hover:text-orange-400">
						HOME
					</Link>
					<Link
						to="/headphones"
						className="transition ease-in-out duration-700 hover:text-orange-400">
						HEADPHONES
					</Link>
					<Link
						to="/speakers"
						className="transition ease-in-out duration-700 hover:text-orange-400">
						SPEAKERS
					</Link>
					<Link
						to="/earphones"
						className="transition ease-in-out duration-700 hover:text-orange-400">
						EARPHONES
					</Link>

					<button
						className="transition ease-in-out duration-700 hover:text-orange-400"
						onClick={toggleCartFn}>
						Cart
					</button>
				</div>

				{/* mobile */}
				<div className={!Open && "hidden"}>
					<div className="  text-lg flex flex-col space-y-4 sm:hidden ">
						<Link
							to="/"
							className="transition ease-in-out duration-700 hover:text-orange-400">
							HOME
						</Link>
						<Link
							to="/headphones"
							className="transition ease-in-out duration-700 hover:text-orange-400">
							HEADPHONES
						</Link>
						<Link
							to="/speakers"
							className="transition ease-in-out duration-700 hover:text-orange-400">
							SPEAKERS
						</Link>
						<Link
							to="/earphones"
							className="transition ease-in-out duration-700 hover:text-orange-400">
							EARPHONES
						</Link>

						<button
							className="transition ease-in-out duration-700 hover:text-orange-400"
							onClick={toggleCartFn}>
							Cart
						</button>
					</div>
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
export default Navbar;
