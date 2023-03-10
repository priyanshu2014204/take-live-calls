import React from "react";

const Landing = () => {
	const img =
		"https://playo-website.gumlet.io/playo-website-v2/static_pages/hero-images/Landing+Page.jpeg?q=70&h=1200&w=1200&flip=h";
	return (
		<div
			style={{
				background: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				display: "flex",
				height: "100vh",
				backgroundRepeat: "no-repeat",
			}}>
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					alignItems: "center",
					background:"linear-gradient(to  right,rgba(0,0,0,0.9),rgba(0,0,0,0.0))"
					  // backgroundImage: "linear-gradient(to right, red , yellow)"
				}}>
				<div
					style={{
						// border: "1px solid red",
						height: "60%",
						width: "600px",
						color: "white",
						margin: "auto 5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "flex-start",
					}}>
					<img
					
						src='https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png'
						alt=''
						width={160}
						style={{
							marginBottom: "2rem",
						}}
					/>
					<h1
						style={{
							fontSize: "2.5rem",
						}}>
						Get Your Game On, With The World's Largest Sports
						Community App
					</h1>
					<img src='/download.png' alt='' width={450} />
				</div>
			</div>
		</div>
	);
};

export default Landing;
