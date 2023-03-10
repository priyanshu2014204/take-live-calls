import React from "react";
import SportTitle from "./SportTitle";

const SportSection = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				width: "80%",
				height: "60%",
				padding: "2rem",
				margin: "auto",
				alignItems: "center",
	    //  border: "1px solid red",
			}}>
			<div
				style={{
					height: "230px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<SportTitle
					src={
						"https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fplay-with-players.png&w=1920&q=60"
					}
					text='Play with players around you'
				/>
				<SportTitle
					src={
						"https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fskill-up-game.png&w=1920&q=60"
					}
					text='Skill-up your game'
				/>
			</div>
			<img
				src='https://playo-website.gumlet.io/playo-website-v2/static_pages/badminton-girl.svg'
				alt='badminton'
				style={{ width: "25%",marginTop:"20px" }}
			/>
			<div
				style={{
					height: "230px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<SportTitle
					src={
						"https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fbook-sports-venues.png&w=1920&q=75"
					}
					text='Book sports venues nearby'
				/>
				<SportTitle
					src={
						"https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fmanage-sports.png&w=1920&q=60"
					}
					text='Manage your sports activities & groups'
				/>
			</div>
		</div>
	);
};

export default SportSection;
