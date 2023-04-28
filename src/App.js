import Earphones from "./pages/Earphones";
import Speaker from "./pages/speaker";
import Headphones from "./pages/headphones";
// import Features from "./components/features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CheckoutForm1 from "./components/checkout";
import Cart from "./components/cart";
import Product from "./pages/Product";
import Productdet from "./components/Productdet";
// import CheckoutForm1 from "./components/checkout";
// import Product from "./components/Product";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route exact path="/" element={<Features />}></Route> */}
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					path="/Headphones"
					element={<Headphones />}
				/>
				<Route
					path="/Speakers"
					element={<Speaker />}
				/>
				<Route
					path="/Earphones"
					element={<Earphones />}
				/>
				<Route
					path="/test"
					element={<Cart />}
				/>
				<Route
					path="/product"
					element={<Product />}
				/>

				<Route
					path="product/:name"
					element={<Productdet />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
