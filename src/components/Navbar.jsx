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
		<section className="bg-black fixed top-0 left-0 right-0 z-[500] m sm:h-fit h-[105px]   flex flex-col items-center justify-center">
			<Cart />
			<div className="text-white space-y-2 sm:space-y-0 mx-auto container py-8 px-4 flex flex-col sm:flex-row justify-between border-b-[1px] mb-1 border-gray-400">
				<span className="font-bold text-2xl ">Audiophile</span>

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

					<button
						className="transition ease-in-out duration-700 relative hover:text-orange-400"
						onClick={toggleCartFn}>
						<BsCart size={30} />
						<span className="absolute -top-1 -right-1 font-bold h-5 w-5 bg-white text-black rounded-full text-center">
							4
						</span>
					</button>
				</div>

				{/* mobile */}
				<div className={!Open && "hidden"}>
					<div className="  text-lg flex flex-col space-y-4 sm:hidden ">
						<Link
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-orange-400"
									: "transition ease-in-out duration-700 hover:text-orange-400"
							}>
							HOME
						</Link>
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

						<button
							className={({ isActive }) =>
								isActive
									? "text-orange-400"
									: "transition ease-in-out duration-700 hover:text-orange-400"
							}
							onClick={toggleCartFn}>
							<BsCart />
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
