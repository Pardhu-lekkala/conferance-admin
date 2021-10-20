import React from "react";
import './index.css';
import logo from "../../Assets/Images/logo.png";
import arrow from "../../Assets/Images/Shape.png";
import expand from "../../Assets/Images/expand_more.png";
import initial from "../../Assets/Images/Initials.png"
import { useHistory } from "react-router";

const NavBar=()=>{
    const history=useHistory()
    function navigateToCreateProject(){
        history.push("/createproject")
    }
    return(
        <div className="mainContainer">
            <div className="imgcont">
                <img src={arrow} className="img1" alt="logo"/>
                <img src={logo} className="img2" alt="logo"/>
            </div>
            <div className="content-cont">
                <h1 className="head">View Projects</h1>
                <button className="btn" onClick={navigateToCreateProject}>Create a Project</button>
                <div className="cont2">
                 <img src={initial} className="img4"/>
                 <h1 className="head">Antony</h1>
                <img src={expand} className="img3" alt="logo"/>    
            </div>
            </div>
        </div>
    )
}
export default NavBar;