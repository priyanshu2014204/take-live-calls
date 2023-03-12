import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar";

const Register = () => {
const url="http://localhost:8080/user/register"
  const name = React.useRef();
  const email = React.useRef();
  const password = React.useRef();
  const nevigate = useNavigate();
 
  async function registerme(user) {
    let data = await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (data.status == 200) {
      data = await data.json();
      let { token } = data; // already a string so not stringify
      localStorage.setItem("playo", token);
	  Swal.fire("Registration success", "Account login successfull", "success");
	  nevigate('/') ;
	  window.location.reload()
    } else {
		let {msg}=await data.json();
      Swal.fire("Unauthorize!", msg, "warning");
    }
  }


  const handleLogin = () => {
    const user = {
      username: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    registerme(user);
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";

    setTimeout(() => {
      // nevigate('/login')
    }, 2000);
  };
  return (
	<>
	<Navbar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60rem",
        width: "100vw",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          height: "50%",
          width: "20%",
          borderRadius: "10px",
          lineHeight: "2.5rem",
          background: "#eef3f6",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Register Here
        </h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter username here" ref={name} />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter email here" ref={email} />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter password here"
          ref={password}
        />
        <Link to="/login">Already have an account?</Link>
        <button
          onClick={handleLogin}
          style={{
            background: "linear-gradient(to  right,#63db0e,#05b75f)",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            color: "white",
            cursor: "pointer",
            height: "40px",
            marginTop: "1.5rem",
          }}
        >
          Register
        </button>
      </div>
    </div>
	</>	
  );
};

export default Register;
