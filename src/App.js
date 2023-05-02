import Earphones from "./pages/Earphones";
import Speaker from "./pages/speaker";
import Headphones from "./pages/headphones";
// import Features from "./components/features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/Product";
import Producet from "./components/Product";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
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
					path="/headphones"
					element={<Headphones />}
				/>
				<Route
					path="/speakers"
					element={<Speaker />}
				/>
				<Route
					path="/earphones"
					element={<Earphones />}
				/>
				<Route
					path="/test"
					element={<Producet />}
				/>
				<Route
					path="/products"
					element={<Product />}
				/>

				<Route
					path="product/:name"
					element={<SingleProduct />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
