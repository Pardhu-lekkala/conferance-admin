import React from "react";
import { useState } from "react";
import NavBar from "../../Components/NavItem";
import './project.css'
import { useHistory } from "react-router";

const CreateProject=()=>{
    const [project,setProject]=useState("")
    const history=useHistory();
    function navigateToCustom(){
        history.push("/customlogin")
    }
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="cont-container">
                <h1 className="head-style">Create New Project</h1>
                <p className="para-style">Project Name</p>
                <input className="inp-style" type="text" value={project}
                onChange={(e)=>setProject(e.target.value)}/>
                <div >
                <button className={`${project !== "" ? "btn-style2" : "btn-style"}`} onClick={navigateToCustom}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default CreateProject;