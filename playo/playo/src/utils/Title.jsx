import React from 'react'

const Title = ({text}) => {
  return (
		<div
			style={{
				borderLeft: "4px solid #00b562",
        paddingLeft: "5rem",
        display: "flex",
        alignItems: "center",
        height: "50px",
        marginBottom:'5rem'
			}}>
			<h1>{text}</h1>
		</div>
  );
}

export default Title
