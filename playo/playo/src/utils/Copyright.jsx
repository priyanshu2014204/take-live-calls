import React from "react";

const Copyright = () => {
	const titles = [
		"FAQs",
		"Privacy Policy",
		"Terms & Conditions",
		"Cancellation Policy",
	];
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				margin: "auto",
				marginTop: "2.5rem",
				height: "5rem",
				borderTop: "1px solid #e0e0e0",
        justifyContent: "flex-end",
        fontSize: "1.1rem",
			}}>
			{titles.map((title) => (
				<a
					href='#'
					style={{
						color: "black",
						marginRight: "1.5rem",
					}}>
					<p>{title}</p>
				</a>
			))}
			<p
       style={{color:"#737373",fontSize:"0.9rem"}}
      >
				© 2022 Techmash Solutions Private Limited. All Rights Reserved.
			</p>
		</div>
	);
};

export default Copyright;
