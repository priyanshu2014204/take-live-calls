import React, { createContext, useState } from "react";

export const ContextApi = createContext();

export default function Context({ children }) {
  const [state, setState] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isAuth, setAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const getUser = async () => {
    const token = localStorage.getItem("playo");
    const url = "https://playo-9e5g.onrender.com/user/details";
    fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (res.ok) {
          setAuth(!isAuth);
          return res.json();
        }
      })
      .then((value) => setUserData(value));
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const setStateFunction = (value) => {
    setState(value);
  };

  const setDetailFunction = (value) => {
    setDetail(value);
  };

  // console.log('isAuth',isAuth,'userData',userData)

  return (
    <ContextApi.Provider
      value={{
        state,
        setStateFunction,
        detail,
        setDetailFunction,
        isAuth,
        userData,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}
