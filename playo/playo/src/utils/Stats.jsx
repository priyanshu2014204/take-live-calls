import React from "react";

const Stats = () => {
	const stats = [
		{ text: "2M+", subtitle: "Users" },
		{ text: "50+", subtitle: "Sports" },
		{ text: "6M+", subtitle: "Sports activites Enabled" },
		{ text: "4M+", subtitle: "Player Connections Enabled" },
	];
	return (
		<div
			style={{
				display: "flex",
				width: "76%",
				background: "#ffffff",
				margin: "auto",
				borderRadius: "5px",
				height: "6rem",
				alignItems: "center",
				padding: "0.7rem",
			}}>
			{stats.map((stat, index) => (
				<div
					key={index}
					style={{
						width: "25%",
						textAlign: "center",
						borderLeft: index === 0 ? "none" : "1px solid #bfbfbf",
					}}>
					<h3 style={{ fontSize: "2rem", fontWeight: "700" }}>
						{stat.text}
					</h3>
					<p
						style={{
							fontSize: "1.2rem",
							marginTop: "10px",
						}}>
						{stat.subtitle}
					</p>
				</div>
			))}
		</div>
	);
};

export default Stats;
