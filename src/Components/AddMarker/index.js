import React from "react";
import NavBar from "../NavItem";
import markerimage from "../../Assets/Images/Ftfn 1.png";
import './marker.css';

const AddMarker=()=>{
    return(
        <div>
            <NavBar/>
            <img src={markerimage} className="mark-img"/>
        </div>
    )
}

export default AddMarker;