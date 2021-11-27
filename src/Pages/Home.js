import React from "react";
import NavBar from "../Components/NavItem";
import './Home.css'
import folder from "../Assets/Images/EmptyState.png"
import { useHistory } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import constants from "./constants";
import { ListItem } from "@material-ui/core";
import { fontWeight } from "@mui/system";



const Home=(props)=>{
  const token=props.location.state.token
  console.log(token,"jwt")
  let x=2;
  // console.log(props);
  const history=useHistory()
  function navigate(){
    history.push({
      pathname:'/createproject',
      state:{
          token:props.location.state.token,
      }
  }) 
  }
  const [userlist, setUserlist] = useState([]);
  // axios({
  //   method: "get",
  //   url: "http://18.222.221.0:1337/projects?_limit=2&_sort=published_at:DESC",
  // })
  //   .then(function (response) {
  //     setUserlist(response.data);
  //     console.log(userlist)
  //   })

    useEffect(() => {
      fetch(constants.ipaddress+"/projects?_limit=8&_sort=published_at:ASC")
      .then(response => response.json())
      .then(data => setUserlist(data))
    },[])

    console.log(userlist,"PROJECT DATA")
    // console.clear();

  if(userlist.length==0){
  return(
    <div class="page">
    <div>
    <NavBar token={token}/>
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
  else{
    return(
      <div class="page" >
        <div>
    <NavBar token={token}/>
    </div> 
    <div class="flex-container">
    {userlist.map((item, index) => {
      return(
      <div class="flex-items">
        <h1 class="text">
          Conference {index+1}
        </h1>
        <div style={{textAlign:"center"}}>
        <img style={{width:275, height:250,}} src={item.backgroundImage.url} alt={item.backgroundImage.alternativeText}>
        {/* <img style={{width:275, height:250,}} src="" alt=""> */}
        </img>
        </div>
        <div class="text">
        <div style={{color:"#33587b", fontWeight:"600",marginBottom:"5px"}}>Access Code: <span style={{color: '#002e5a', fontWeight:"bold"}}>{item.accesscode}</span></div>
        <div style={{color:"#33587b", fontWeight:"600",marginBottom:"5px"}}>Number of Pages in the Project: <span style={{color: '#002e5a', fontWeight:"bold"}}>{item.pages.length}</span></div>
        <div style={{color:"#33587b", fontWeight:"600",marginBottom:"5px"}}>Marker Color: <span style={{color: '#002e5a', fontWeight:"bold"}}>{item.markerColor}</span></div>
      </div>
      </div>
      )
    })}
      </div>
    </div>
         
    )

  }
}
export default Home;

{/*import React from "react";
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
export default Home;*/}

