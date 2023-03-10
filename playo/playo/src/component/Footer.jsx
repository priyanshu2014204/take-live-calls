import React from "react";

const Footer = () => {
	return (
		<div
			style={{
				width: "100%",
				// border: "1px solid red",
				marginTop: "8rem",
				height: "12em",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "flex-start",
					height: "100%",
          position: "relative",
          right: "11rem"
				}}>
				<img
					src='https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png'
					width={180}
				/>
				<p>Your Sports Community App</p>
				<img src='/download.png' width={300} alt='soneu' />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					height: "100%",
          lineHeight: "2.8rem",
          position: "relative",
          bottom: "1rem"
				}}>
				<a href='#' style={{textDecoration:"none",color:'black'}}>About Us</a>
				<a href='#' style={{textDecoration:"none",color:'black'}}>Contact</a>
				<a href='#' style={{textDecoration:"none",color:'black'}}>Careers</a>
				<a href='#' style={{textDecoration:"none",color:'black'}}>Partne With Us</a>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "flex-start",
					height: "100%",
          width: "10%",
				}}>
				<a href='#'>
					<img
						src='https://playo-website.gumlet.io/playo-website-v2/static_pages/footer-instagram.png'
            width={25}
					/>
				</a>
				<a href='#'>
					<img
						src='https://playo-website.gumlet.io/playo-website-v2/static_pages/footer-facebook.png'
            width={25}
						alt=''
					/>
				</a>
				<a href='#'>
					<img
						src='https://playo-website.gumlet.io/playo-website-v2/static_pages/footer-linkedin.png'
            width={25}
						alt=''
					/>
				</a>
				<a href='#'>
					<img
						src='https://playo-website.gumlet.io/playo-website-v2/static_pages/footer-twitter.png'
            width={25}
						alt=''
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
