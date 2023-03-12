import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cities from "../component/Cities";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  const [dashvalue, setDashvalue] = useState([]);
  const api = "http://localhost:8080/event/mydashboard";

  async function dashdetails() {
    const token = localStorage.getItem("playo");
    let data = await fetch(api, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (data.status !== 200) {
    }
    data = await data.json();
    setDashvalue(data);
  }

  useEffect(() => {
    dashdetails();
  }, []);
console.log(dashvalue)
  return (
<>
 <Navbar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        width: "80vw",
        background: "#ffffff",
        margin: "auto",
      }}
    >
      <table
        style={{
          background: "#eef3f6",
          padding: "2rem",
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          textAlign: "left",
          lineHeight:'2.5rem'
        }}
      >
        <thead
          style={{
            marginBottom:'2rem'
          }}
          
        >
          <tr >
            <th>Title</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Organiser</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody
          style={{
            padding: "2rem",
            background: "#eef3e6",
        }}
        >
          {dashvalue.map(
            ({ _id, status, event: [{ title, date, venue, organisedby }] }) => (
              <tr key={_id}>
                <td>{title}</td>
                <td>{venue}</td>
                <td>{date.split("T")[0]}</td>
                <td>{organisedby}</td>
                <td
                  style={{
                    color:
                      status === "pending"
                        ? "orange"
                        : status === "rejected"
                        ? "red"
                        : "green",
                    borderRadius: "6px",
                    fontWeight:'800'
                  }}
                >
                  {status[0].toUpperCase()+status.split('').slice(1).join('')}
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

export default Dashboard;
