import { useEffect, useState } from "react";
import Swal from "sweetalert2"


const Dashboard = () => {
   const [dashvalue,setDashvalue]=useState([]) 
  const api="http://localhost:8080/event/mydashboard"

  async function dashdetails(){
     const token=localStorage.getItem("playo");
     let data= await fetch(api,
           {   method:"Post",
               headers: {
                   "Content-Type": "application/json",
                 },
                body:JSON.stringify({token})
            }
        )
        if(data.status!==200){

        }
       data=await data.json();
       setDashvalue(data);
       console.log(data) 
    //    console.log(dashvalue) 
  }


    useEffect(()=>{
        const data=dashdetails();
},[])

    return ( <h1>
        Moto details
    </h1> );
}
 
export default Dashboard;