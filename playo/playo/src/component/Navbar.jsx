import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextApi } from "../context/Context";

const Navbar = ({ bool }) => {
  const [show, setShow] = useState(false);

  const { userData, isAuth } = useContext(ContextApi);
  // console.log("navbar", userData);
  const nevigate = useNavigate();
  const handleLogin = () => {
    nevigate("/register");
  };
  const handleLogout = () => {
    localStorage.removeItem("playo");
    nevigate('/')
    window.location.reload()
  }

  const navigatetohome=()=>{
    nevigate('/')
  }


  return (
    <div
      style={{
        background: !bool ? "rgba(0,0,0,0.4)" : "white",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        height: "55px",
        alignItems: "center",
        color: !bool ? "white" : "black",
        fontSize: "14px",
        fontWeight: "bold",
        position: "fixed",
      }}
    >
    <div
    style={{
      position:"absolute",
      top:"20px",
      left:"100px",
      fontSize:"130%",
      cursor:"pointer"
    }}
 onClick={navigatetohome}

    >
      Home
    </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "280px",
          listStyle: "none",
          padding: "0 60px",
          height: "40px",
          alignItems: "center",
        }}
      >
        {!bool ? (
          <>
            <li style={{ cursor: "pointer" }}>PLAY</li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => nevigate("/booking")}
            >
              BOOK
            </li>
            <li style={{ cursor: "pointer" }}>LEARN</li>
          </>
        ) : (
          <>
            <li style={{ cursor: "pointer" }}>Explore</li>
            <li style={{ cursor: "pointer" }}>Contact Us</li>
            <li style={{ cursor: "pointer" }}>LEARN</li>
          </>
        )}
        {!isAuth ? (
          <button
            onClick={handleLogin}
            style={{
              background: "linear-gradient(to  right,#63db0e,#05b75f)",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "white",
              cursor: "pointer",
            }}
          >
            SignUp
          </button>
        ) : (
          <div style={{ position: "relative" }}>
            <button
              style={{
                background: "linear-gradient(to  right,#63db0e,#05b75f)",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                color: "white",
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              {userData?.username}
            </button>
            <div
              onMouseEnter={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
              style={{
                display: show ? "flex" : "none",
                width: "100px",
                height: "100px",
                position: "absolute",
                top: "28px",
                background: "#ffff",
                transition: "all,0.3,ease-in",
                flexDirection: "column",
                textDecoration: "none",
                lineHeight: "2rem",
                outline: "none",
                borderRadius: "10px",
                padding: "1rem",
                color:"black"
              }}
            >
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
              <Link to="/createevent" style={{ textDecoration: "none" }}>
                Create
              </Link>
              <Link to="#" style={{ textDecoration: "none" }}
               onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
