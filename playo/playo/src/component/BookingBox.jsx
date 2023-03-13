import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { ContextApi } from "../context/Context";

const img =
	"https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fshutterstock-1216975543%403x.png%3Fq%3D2%26h%3D600%26w-600%26format%3Dwebp&w=1920&q=75";
const BookingBox = () => {
	const {setStateFunction} = useContext(ContextApi)
	const nevigate = useNavigate();
	const locationValue = React.useRef(null);
	const url="http://localhost:8080/event/searcheventbycity?city="
    async function showevents(city){
         let data=await fetch(url+city);
		 if(data.status==200){
			data=await data.json();
			setStateFunction(data)
			console.log(data)
			nevigate('/events')
		 }else{
			Swal.fire(
				'Error!',
				'Something went wrong',
				'warning'
			  )
		 }
	 }

	const handleClick = () => {
	   const city=locationValue.current.value;
	   showevents(city)
	};

	const cities = ["Bangalore", "Delhi", "Mumbai", "Hyderabad", "Chennai", "Kolkata"];
	return (
		<div
			style={{
				background: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				display: "flex",
				height: "120vh",
				backgroundRepeat: "no-repeat",
			}}>
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					alignItems: "center",
					background: "rgba(256,256,256,0.6) ",
					// backgroundImage: "linear-gradient(to right, red , yellow)"
				}}>
				<div
					style={{
						height: "50%",
						width: "1000px",
						margin: "auto",
						background: "rgba(256,256,256,0.7)",
						borderRadius: "10px",
					}}>
					<div>
						<h1
							style={{
								textAlign: "center",
								margin: "2rem",
								fontWeight: "400",
							}}>
							Ready to find{" "}
							<i
								style={{
									background: "#00b562",
									color: "white",
									borderRadius: "5px",
									padding: "0.2rem 0.5rem",
									fontWeight: "100",
								}}>
								Sport venues
							</i>{" "}
							around you
						</h1>
						<div
							style={{
								width: "33rem",
								margin: "auto",
								padding: "1rem",
								background: "#ffff",
								borderRadius: "8px",
								boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
							}}>
							<div
								style={{
									height: "50px",
									border: "1px solid lightgray",
									borderRadius: "5px",
									display: "flex",
									padding: "0 1rem",
								}}>
								<img
									onClick={handleClick}
									src='https://playo-website.gumlet.io/playo-website-v2/logos-icons/search-icon-dark.svg'
									alt='search-icon'
									width={20}
									style={{
										margin: "auto 0.5rem",
										cursor: "pointer",
									}}
								/>
								<input
									type='text'
									style={{
										height: "100%",
									}}
									placeholder='Search for cities, places ...'
									ref={locationValue}
								/>
								<img
									src='https://playo-website.gumlet.io/playo-website-v2/logos-icons/detect-location-icon.svg'
									alt='location'
									width={20}
									style={{
										margin: "auto 0.5rem",
										cursor: "pointer",
									}}
								/>
							</div>
						</div>
					</div>
					<div
						style={{
							width: "34rem",
							margin: "auto",
							// border: "1px solid red",
							marginTop: "1.5rem",
						}}>
						<p style={{ marginBottom: "1rem" }}>Popular Cities</p>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3,1fr)",
								justifyContent: "center",
							}}>
							{cities.map((city) => (
								<div
									key={city}
									style={{
										margin: "0.5rem",
										cursor: "pointer",
										border: "1px solid lightgray",
										padding: "0.8rem",
										textAlign: "center",
										background: "#ffff",
										borderRadius: "5px",
									}}
									onMouseEnter={(e) => {
										e.target.style.background = "#00b562";
										e.target.style.color = "white";
									}}
									onMouseLeave={(e) => {
										e.target.style.background = "#ffff";
										e.target.style.color = "black";
									}}>
									{city}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingBox;
