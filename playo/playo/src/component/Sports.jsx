import React from 'react'
import SportSection from '../utils/sportSection';
import Stats from '../utils/Stats';
import Title from '../utils/Title'

const Sports = () => {
  return (
		<div
			style={{
				background: "#ffffff",
				width: "100%",
				padding: "5rem",
				height: "500px",
				marginBottom: "10rem",
			}}>
			<Title text='Your one-stop platform for sports' />
			<div
				style={{
					background: "#eef3f6",
					width: "90%",
					borderRadius: "5px",
					height: "100%",
					// border: "1px solid #bfbfbf",
					marginBottom: "5rem",
				}}>
				<SportSection />
				<Stats />
			</div>
			<Title text='Verified By Playoholics' />
		</div>
  );
}

export default Sports
