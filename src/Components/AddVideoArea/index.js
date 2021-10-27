import React from "react";
import NavBar from "../NavItem";
import areaimage from "../../Assets/Images/vdarea.png";
import './video.css'

const AddVideoArea=()=>{
    return(
        <div>
            <NavBar/>
            <img src={areaimage} className="area-img"/>
        </div>
    )
}
export default AddVideoArea;