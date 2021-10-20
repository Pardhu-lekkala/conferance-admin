import React from "react";
import './sidebar.css'
import arrow2 from "../../../Assets/Images/Add New.png";
import edit from "../../../Assets/Images/edit.png";
import addimage from "../../../Assets/Images/addimg.png"

const SideBar=()=>{
    return(
        <div className="side-main-cont">
            <div className="box-cont">
                <div className="conf-cont">
                    <div className="cont-pro-cont">
                    <img src={arrow2} alt="..." className="arr-img"/>
                    <h1 className="project-name">state value</h1>
                    <img src={edit} alt="..." className="edit-img"/>
                    </div>
                </div>
                <div className="login-pg-cont">
                <h1 className="login-text">Login Page</h1>
            </div>
            <div className="create-pg-cont">
                <img src={addimage} alt="..." className="addimg"/>
                <h1 className="create-text">Create a new project</h1>
            </div>
           
        </div>
    </div>
    )
}
export default SideBar;