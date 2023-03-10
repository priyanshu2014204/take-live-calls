import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({bool}) => {
	const nevigate = useNavigate();
	const handleLogin = () => {
		nevigate("/register");
	};
	return (
		<div
			style={{
				background: !bool?"rgba(0,0,0,0.4)":"white",
				display: "flex",
				justifyContent: "flex-end",
				width: "100%",
				height: "55px",
				alignItems: "center",
				color: !bool?"white":"black",
				fontSize: "14px",
				fontWeight: "bold",
				position: "fixed",
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "280px",
					listStyle: "none",
					padding: "0 60px",
					height: "40px",
					alignItems: "center",
				}}>
				{!bool ? (
					<>
						<li style={{ cursor: "pointer" }}>PLAY</li>
						<li style={{ cursor: "pointer" }} onClick={()=>nevigate('/booking')}>BOOK</li>
						<li style={{ cursor: "pointer" }}>LEARN</li>
					</>
				) : (
					<>
						<li style={{ cursor: "pointer" }}>Explore</li>
						<li style={{ cursor: "pointer" }}>Contact Us</li>
						<li style={{ cursor: "pointer" }}>LEARN</li>
					</>
				)}
				<button
					onClick={handleLogin}
					style={{
						background:
							"linear-gradient(to  right,#63db0e,#05b75f)",
						border: "none",
						borderRadius: "5px",
						padding: "5px 10px",
						color: "white",
						cursor: "pointer",
					}}>
					SignUp
				</button>
			</div>
		</div>
	);
};

export default Navbar;
