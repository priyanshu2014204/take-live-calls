import { createContext, useState } from "react";

export const ContextApi = createContext();

export default function Context({ children }) {
  const [state, setState] = useState([]);
  const [detail,setDetail]=useState([])
  const setStateFunction = (value) => {
    setState(value);
  };

  const setDetailFunction=(value)=>{
    setDetail(value)
  }

  return (
    <ContextApi.Provider value={{ state, setStateFunction,detail,setDetailFunction }}>
      {children}
    </ContextApi.Provider>
  );
}
