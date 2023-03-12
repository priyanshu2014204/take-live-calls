import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar";

const Login = () => {
  const email = React.useRef();
  const password = React.useRef();
  const nevigate = useNavigate();
  const url = "http://localhost:8080/user/login";

  async function login(user) {
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
	  Swal.fire("Login success", "Account login successfull", "success");
	  nevigate('/') ;
	  window.location.reload()
    } else {
      Swal.fire("Unauthorize!", "Something went wrong", "warning");
    }
  }

  const handleLogin = () => {
    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    email.current.value = "";
    password.current.value = "";
    login(user);
    // nevigate('/') redirect to home page
    setTimeout(() => {
      //   nevigate('/booking')
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
        height: "50rem",
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
          Login Here
        </h1>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter email here" ref={email} />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter password here"
          ref={password}
        />
        <a href="#">Forget password?</a>
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
          Login
        </button>
      </div>
    </div>
	</>
  );
};

export default Login;
