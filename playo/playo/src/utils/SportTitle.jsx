import React from 'react'

const SportTitle = ({src,text}) => {
  return (
    <div
     style={{
        display: "flex",
        alignItems: "center",
        height: "90px",
        width: "340px",
    }}
    >
      <img src={src} alt="text" width={100} style={{margin:"20px"}}/>
      <p
      style={{
        fontSize: "1.2rem",
        fontWeight: "600"
      }}
      >{text}</p>
    </div>
  )
}

export default SportTitle
