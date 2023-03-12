import React from "react";
import Swal from "sweetalert2"
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const CreateEvent = () => {
  const url = "https://playo-9e5g.onrender.com/event/createevent";

 const navigate=useNavigate()

  function navigatetorequest(){
    navigate("/request")
  }

  async function makeEventcall(obj) {
    let token = localStorage.getItem("playo");
    obj.token = token;
    //  console.log(obj)

    let data = await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if(data.status==200){
        data = await data.json();
        Swal.fire(
            'Error!',
            'Event Created ',
            'success'
            )
        }else{
            data = await data.json();;
            Swal.fire(
                'Error!',
                data.msg,
                'warning'
                )
    }
   
  }

  const initial = {
    title: "",
    date: "",
    startat: "",
    endat: "",
    venue: "",
    state: "",
    limit: 0,
    description: "",
  };
  const { current: eventData } = React.useRef(initial);
  const nevigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    const arr = [...e.target];
    let bool=0
    arr.forEach((element) => {
      if (!element.value) {
        bool++
      } else {
        const key = element.name;
        const value = element.value;
        eventData[key] = value;
      }
    });
    if(bool>1){
         alert("Fill all input fields");
    }else{
      makeEventcall(eventData)}
  };
  return (
  <>
<Navbar/>

<button
 style={{
//    marginTop:"80px",
    position:"absolute",
    top:"67px",
    left:"87px",
   width:"100px",
   height:"50px",
   backgroundColor:"green",
   borderRadius:"6px",
   fontSize:"120%",
   fontWeight:"700px",
   color:"white"
 }}

 onClick={navigatetorequest}
>
    Requests
</button>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100vw",
        background: "#ffffff",
        paddingTop:"100px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          height: "50%",
          width: "30%",
          borderRadius: "10px",
          lineHeight: "2.5rem",
          background: "#eef3f6",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Create Your Own Event
        </h1>
        <form onSubmit={handleData}>
          <label htmlFor="">Title</label>
          <input type="text" placeholder="Enter title here" name="title" />
          <label htmlFor="">Event Date</label>
          <input type="date" name="date" />
          <label htmlFor="">Start time</label>
          <input type="time" name="startat" />
          <label htmlFor="">End time</label>
          <input type="time" name="endat" />
          <label htmlFor="">Venue</label>
          <input type="text" placeholder="Enter venue here" name="venue" />
          <label htmlFor="">State</label>
          <input type="text" placeholder="Enter state here" name="state" />
          <label htmlFor="">Available seats</label>
          <input
            type="number"
            min={1}
            max={50}
            placeholder="Enter seats here"
            name="limit"
          />
          <label htmlFor="">Description</label> <br />
          <textarea
            name="description"
            id=""
            cols="55"
            rows="7"
            style={{
              background: "#ffffff",
              outline: "none",
              border: "none",
              borderRadius: "10px",
              maxWidth: "95%",
              minWidth: "95%",
              minHeight: "10%",
              padding: "10px",
            }}
          ></textarea>{" "}
          <br />
          <button
            type="submit"
            style={{
              background: "linear-gradient(to  right,#63db0e,#05b75f)",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "white",
              cursor: "pointer",
              height: "40px",
              marginTop: "1.5rem",
              width: "100%",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateEvent;
