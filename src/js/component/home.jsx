import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="h-100">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex navbar">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home;
