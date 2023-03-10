import React from 'react'

const Download = () => {
  return (
		<div
			style={{
				background: "#ffffff",
				width: "70%",
				padding: "5rem",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
        margin: "auto",
				// border: "1px solid red",
			}}>
			<img
				src='https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fapp-screen.png&w=828&q=60'
				alt='mobile'
				width={"35%"}
			/>
			<div
        style={{  
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "40%",
          padding: "2rem",
          // border: "1px solid red",
          height: "200px",
        }}
      >
				<h1 style={{ fontSize: "2.5rem", fontWeight: "600" }}>
					Download the app
				</h1>
				<p
					style={{
						fontSize: "1.2rem",
						fontWeight: "400",
					}}>
					Join the world’s largest sports community, connecting
					millions of people to the sports they love.
				</p>
				<img src='/download.png' width={450} />
			</div>
		</div>
  );
}

export default Download
