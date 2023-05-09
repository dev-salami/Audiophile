import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error() {
	return (
		<>
			<Navbar />
			<div className="text-5xl font-bold text-orange-500">
				<div className="my-10">Link Is Probably Broken</div>
				<Link to="/">Return To Home Page</Link>
			</div>
			<Footer />
		</>
	);
}

export default Error;
