import { useContext } from "react";
import Navbar from "../component/Navbar";
import { ContextApi } from "../context/Context";
import Swal from "sweetalert2"

const Details = () => {
    const {detail} = useContext(ContextApi)
    const img='https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const url='https://playo-9e5g.onrender.com/event/bookticket/'
    const token=localStorage.getItem("playo");
  async  function bookslot(){
        const endpoint=detail._id;
        console.log("end",endpoint)
        let data=await fetch(url+endpoint,{
            method:"Post",
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify({token})
        });
        const status=data.status
        data=await data.json();
        if(status==200){
            Swal.fire(
                'Good job!',
                data.msg || 'success',
                'success'
              )
        }else{
            Swal.fire(
                'Error!',
                data.msg || 'Something went wrong',
                'warning'
              )
        }
        console.log(data)
    }

    return ( 
      <>
        <Navbar/>
        <h1 className="title_final">{detail.title}</h1>

        {/* detail.title && */}
        { <div className="bookcart">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                
                <button className="book_register" onClick={bookslot}>Book now </button>
                <p className="timing">
                    <p>Timings</p>
                    <span>{detail.startat.split("T")[1].split("+")[0]}-</span>
                    <span>{detail.endat.split("T")[1].split("+")[0]}</span>
                </p>
                <p className="organised">
                <p>Organised by</p>
                <p>{detail.organisedby.username}</p>
                </p>
                <p className="location">
                <p>Location</p>
                <p>{detail.venue}</p>
                </p>
            </div> 
        </div>}
      </>  
    );
}
 
export default Details;