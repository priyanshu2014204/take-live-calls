import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Swal from "sweetalert2"
import { ContextApi } from "../context/Context";

const Events = () => {
    const url='https://playo-9e5g.onrender.com/event/detail'
    const {state,detail,setDetailFunction,setStateFunction} = useContext(ContextApi)
    const images=["https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=600"]
    const navigation=useNavigate()
   const showdetail=async (value)=>{
      let data=await fetch(url+"/"+value)
      if(data.status==200){
       data=await data.json();
       setDetailFunction(data);
    //    console.log(data)
       navigation("/details")
      }else{
        Swal.fire(
            'Error!',
            'Something went wrong',
            'warning'
          )
      }
   }


    return ( <>
       <Navbar/>
        <div className="container"
         style={{paddingTop:"80px"}}
        >
        {
            state.map((el)=>{
                return (
                <div>
                    <img src={images[Math.floor(Math.random() * images.length)]}/>
                 <div>
                       <h2>
                        {el.title}
                    </h2>
                    <p>{el.description}</p>
                    <p>{el.venue}</p>
                    <p><b>{el.state}</b></p>
                    <div className="per_grid">
                       <p>{el.date.split("T")[0]}</p>
                       <button
                       onClick={()=>{
                        showdetail(el._id)
                       }}
                       >
                        Buy Ticket</button>
                    </div>
                 </div>
                </div>
                )
            })
        }
        </div>
    </> );
}
 
export default Events;