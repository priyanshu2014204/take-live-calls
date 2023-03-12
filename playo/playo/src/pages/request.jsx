import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";
import Cities from "../component/Cities";
import Navbar from "../component/Navbar";

const Allrequest = () => {
  const url = "https://playo-9e5g.onrender.com/event/requestdata";
  const conformticketurl="https://playo-9e5g.onrender.com/event/conformticket"
  const [dummy, setDummy] = useState([]);
  const [mountdata,setmountdata]=useState(true)


  async function gatherdata(val) {
    const token = localStorage.getItem("playo");
    console.log(val)
    let data = await fetch(url+"?status="+val, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    data = await data.json();
    setDummy(data);
    // console.log(finalvariable);
  }

async function acceptrequest(eventpass,eventid){
    setmountdata(!mountdata);
    let obj={
        token:localStorage.getItem("playo"),
        status:"accepted",
        eventpassid:eventpass
    }
    let data=await fetch(conformticketurl+"/"+eventid,{
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    }
    )

    if(data.status!==200){
        data=await data.json();
        console.log(data)
    }else{
        data=await data.json();
    }
    gatherdata()
}


async function rejectrequest(eventpass,eventid){
    console.log(eventpass,eventid)
    setmountdata(!mountdata)
    let obj={
        token:localStorage.getItem("playo"),
        status:"rejected",
        eventpassid:eventpass
    }
    let data=await fetch(conformticketurl+"/"+eventid,{
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    }
    )

    if(data.status!==200){

    }else{
        data=await data.json();
    }
    gatherdata()
}


  useEffect(() => {
    gatherdata();
    console.log("mounted..")
  }, [mountdata]);

  const handleChange=(e)=>{
    const val = e.target.value
    gatherdata(val)
    // const newData =dummy.filter(({status})=>status===val)
    // // console.log(newData)
    // setDummy(newData)
  }
  return (
    <>
    <Navbar/>


      <h1
       style={{
        paddingTop: "5rem",
        textAlign:"center"
       }}
      >All Entry for you Events</h1>

    <div
      style={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "flex-end",
        height: "60vh",
        width: "80vw",
        background: "#ffffff",
        // paddingTop: "5rem",
        margin:"auto"
      }}
    >
      <select onChange={handleChange}
       style={{
         width:'150px',
         height:'30px',
         background:'#eef3f6',
         border:'none',
         borderRadius:'10px',
         marginBottom:'1rem',
         padding:'0.5rem',
         lineHeight:'1rem'
       }}
      >
        <option value="">Filter with status</option>
        <option value="accepted">Accepted</option>
        <option value="pending">Pending</option>
        <option value="rejected">Rejected</option>
      </select>

      <table
        style={{
          background: "#eef3f6",
          padding: "2rem",
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          textAlign: "left",
          lineHeight: "2.5rem",
        }}
      >
        <thead
          style={{
            marginBottom: "2rem",
          }}
        >
          <tr>
            <th>Title</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody
          style={{
            padding: "2rem",
            background: "#eef3e6",
          }}
        >
          {dummy.map(
            ({
              _id,
              status,
              event: [{ title, date, venue }],
              requestuser: [{ username, email }],
              eventid
            }) => (
              <tr key={_id}>
                <td>{title}</td>
                <td>{venue}</td>
                <td>{date.split("T")[0]}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td
                  style={{
                    color:
                      status === "pending"
                        ? "orange"
                        : status === "rejected"
                        ? "red"
                        : "green",
                    borderRadius: "6px",
                    fontWeight: "800",
                  }}
                >
                  {/* {status[0].toUpperCase() + status.split("").slice(1).join("")} */}
                  {status=='pending'?
                  <div
                   style={{
                    display:"flex",
                    alignItems:"center",
                    "justifyContent":"space-between"
                   }}
                  >
                    <button
                    style={{
                        backgroundColor:"green",
                        height:"40px",
                        padding:"3px",
                        borderRadius:"4px",
                        color:"white",
                        fontWeight:"800"
                    }}
                    onClick={()=>{
                        acceptrequest(_id,eventid)
                    }}
                    >Accept</button>
                    <button
                     style={{
                        backgroundColor:"red",
                        height:"40px",
                        padding:"3px",
                        borderRadius:"4px",
                        color:"white",
                        fontWeight:"800"
                    }}
                    onClick={()=>{
                        rejectrequest(_id,eventid)
                    }}
                    >Reject</button>
                  </div>
                  :status[0].toUpperCase() + status.split("").slice(1).join("")}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    <Cities></Cities>
    </>
  );
};

export default Allrequest;
