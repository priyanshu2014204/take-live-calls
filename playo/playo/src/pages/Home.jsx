import React from "react";
import Cities from "../component/Cities";
import Download from "../component/Download";
import Landing from "../component/Landing";
import Navbar from "../component/Navbar";
import Sports from "../component/Sports";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Landing />
			<Sports />
			<Download />
			<Cities />
		</div>
	);
};

export default Home;
