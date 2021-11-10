import React from "react";
import { useState } from "react";
import NavBar from "../../Components/NavItem";
import './project.css'
import { useHistory } from "react-router";


const CreateProject=(props)=>{
    console.log(props.location.state.token,"kkkkk")
    const [project,setProject]=useState("")
    const [accessCode,setAccessCode]=useState(Math.floor(100000 + Math.random() * 900000))
    const history=useHistory();
    function navigateToCustom(){
        history.push({
            pathname:'/customlogin',
            state:{
                project:project,
                accessCode:accessCode,
                token:props.location.state.token,
            }
        })  
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