import Header from "../components/header";
import Productlink from "../components/productlink";
import Headertwo from "../components/headertwo";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import aos from "aos"
// import { useEffect } from "react";

function home() {
	return (
		<>
			<Navbar />
			<Header />
			<Productlink />
			<Headertwo />
			<Advert />
			<Footer />
		</>
	);
}
export default home;
