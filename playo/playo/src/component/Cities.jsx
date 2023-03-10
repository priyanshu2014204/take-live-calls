import React from "react";
import Copyright from "../utils/Copyright";
import Footer from "./Footer";
const Cities = () => {
	const cities = [
		{
			name: "BANGALORE",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "CHENNAI",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "HYDERABAD",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "PUNE",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "DELHI-NCR",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "VISAKHAPATNAM",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "GUNTUR",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
		{
			name: "KOCHI",
			sub: [
				"All sports venues in Bangalore",
				"Badminton venues in Bangalore",
				"Football venues in Bangalore",
				"Cricket venues in Bangalore",
				"Tennis venues in Bangalore",
				"Basketball venues in Bangalore",
				"Table Tennis venues in Bangalore",
				"Volleyball venues in Bangalore",
				"Swimming venues in Bangalore",
			],
		},
	];
	return (
		<div
			style={{
				background: "#f9fcff",
				width: "90.9%",
				padding: "5rem",
				// border: "1px solid red",
        margin: "auto",
			}}>
			<h3>Top Sports available in cities</h3>
			<div
				style={{
					margin: "3rem 0",
          lineHeight: "1.8rem",
          width: "83%",
				}}>
				{cities.map((city) => (
					<>
						<h4
							style={{
								margin: "1rem 0",
							}}>
							{city.name}{" "}
						</h4>
						<p
							style={{
								color: "#737373",
								cursor: "pointer",
								fontSize: "1rem",
							}}>
							{city.sub.join(" | ")}{" "}
						</p>
					</>
				))}
			</div>
      <Footer/>
      <Copyright/>
		</div>
	);
};

export default Cities;
