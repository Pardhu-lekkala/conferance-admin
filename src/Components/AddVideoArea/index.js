import React from "react";
import NavBar from "../NavItem";
import areaimage from "../../Assets/Images/vdarea.png";
import './video.css'
import VideoPlayer from "../VideoPlayer";
import DrawRectangle from "../DrawRectangle";

const AddVideoArea=()=>{
    return(
        <div>
            <NavBar/>
            <div style={{ backgroundImage: `url(${areaimage})` }} className="area-image">
            <DrawRectangle/>
            </div>
        </div>
    )
}
export default AddVideoArea;