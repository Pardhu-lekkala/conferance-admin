import React from "react";
import NavBar from "../Components/NavItem";
import './Home.css'
import folder from "../Assets/Images/EmptyState.png"
import { useHistory } from "react-router";

const Home=(props)=>{
  const history=useHistory()
  console.log(props.location.state.token,"saiiii")
  function navigate(){
    history.push({
      pathname:'/createproject',
      state:{
          token:props.location.state.token,
      }
  }) 
  }
  return(
    <div>
    <div>
    <NavBar/>
    </div>  
    <div className="main-cont1">
        <h1 className="head1">No projects are available</h1>
        <img src={folder} className="img1"/>
        <p className="para1">Start creating a new project</p>
        <div onClick={navigate}>
        <button className="btn1">Create a new project</button>
        </div>
    </div>
    </div>
  )
}
export default Home;