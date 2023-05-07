import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "./cart";
import { toggleCart } from "../Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";

function Navbar() {
	// const showCart = useSelector((state) => state.cart.showCart);
	const dispatch = useDispatch();
	const toggleCartFn = () => {
		dispatch(toggleCart());
	};
	const [Open, setOpen] = useState(false);
	const handleClick = () => setOpen(!Open);
	return (
		<section className="h-full w-full">
			<Cart />
			<main className="text-white   bg-black  w-full  py-8 px-4 h-[100px]  flex flex-row justify-around border-b-[1px]  ">
				<span className="font-bold text-2xl flex items-center ">
					Audiophile
				</span>

				<div className="items-center  text-sm mt-3 sm:flex flex-row font-semibold space-x-4 hidden">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-orange-400"
								: "transition ease-in-out duration-700 hover:text-orange-400"
						}>
						HOME
					</NavLink>

					<Link
						to="/headphones"
						className={({ isActive }) =>
							isActive
								? "text-orange-400"
								: "transition ease-in-out duration-700 hover:text-orange-400"
						}>
						HEADPHONES
					</Link>
					<Link
						to="/speakers"
						className={({ isActive }) =>
							isActive
								? "text-orange-400"
								: "transition ease-in-out duration-700 hover:text-orange-400"
						}>
						SPEAKERS
					</Link>
					<Link
						to="/earphones"
						className={({ isActive }) =>
							isActive
								? "text-orange-400"
								: "transition ease-in-out duration-700 hover:text-orange-400"
						}>
						EARPHONES
					</Link>
				</div>
				<button
					className="transition ease-in-out duration-700 relative hover:text-orange-400"
					onClick={toggleCartFn}>
					<BsCart size={40} />
					<span className="absolute -top-1 -right-1 font-bold h-5 w-5 bg-white text-black rounded-full text-center">
						4
					</span>
				</button>

				<button
					onClick={handleClick}
					className="bg-orange sm:hidden focus:outline-none hover:text-orange-400 transition ease-in-out duration-700 flex items-center  z-[999]">
					<span className="w-8 h-8   ">
						{/* {setOpen  <Menu /> : <Close />} */}
						{!Open ? <FaBars size={30} /> : <FaTimes size={30} />}
					</span>
				</button>
			</main>
			<aside>
				<div
					className={` duration-500 sm:hidden ${
						Open
							? "bg-black/60 fixed !top-0 z-[1000] inset-0 opacity-100"
							: "opacity-0"
					}`}></div>
				<div className="sm:hidden ">
					<div
						className={`z-[1000] duration-1000 p-10 bg-black    fixed top-0 left-0 right-1/3 bottom-0 ${
							Open ? "bg-white " : " bg-white -translate-x-full "
						}`}>
						<div>
							<ul className="flex flex-col text-lg gap-6 text-gray-500 font-semibold leading-tight ">
								<li className=" nav__text">
									<Link to="/">HOME</Link>
								</li>
								<li className=" nav__text">
									<Link to="/">JERSEY</Link>
								</li>
								<li className=" nav__text">
									<Link to="/">BOOTS</Link>
								</li>
								<li className=" nav__text">
									<Link to="/">BEST SELLERS</Link>
								</li>
								<li className=" nav__text">
									<Link to="/">ACCESSORIES</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
}
export default Navbar;
