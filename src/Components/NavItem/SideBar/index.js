import React from "react";
import './sidebar.css'
import arrow2 from "../../../Assets/Images/Add New.png";
import edit from "../../../Assets/Images/edit.png";
import addimage from "../../../Assets/Images/addimg.png";
import ProjectDetails from "../../DetailsCard";
import { useState } from "react";

const SideBar=(props)=>{
    const [open, setOpen] = React.useState(false);
    const projectId=props.projectId
    const pages=props.pages
    const pageLen=props.pageslen
    console.log(projectId,"mainprojectid")
    return(
        <div className="side-main-cont">
            <div className="box-cont">
                <div className="conf-cont">
                    <div className="cont-pro-cont">
                    <img src={arrow2} alt="..." className="arr-img" onClick={()=>{setOpen(true)}}/>
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <h1 className="project-name">{props.projectName}</h1>
                    {projectId !== undefined?<h1 className="project-id">{`${projectId}`}</h1>:null}
                    </div>
                    <img src={edit} alt="..." className="edit-img"/>
                    </div>
                </div>
                <div className="login-pg-cont">
                <h1 className="login-text">Login Page</h1>
               
            </div>
            <ProjectDetails open={open} setOpen={setOpen} projectName={props.projectName} accessCode={props.accessCode}/>
            {pageLen>0?<div className="pg-cont">
            <h1 className="pg-text">Page1</h1>
            </div>:null}
            {pageLen>1?<div className="pg-cont">
            <h1 className="pg-text">Page2</h1>
            </div>:null}
            {pageLen>2?<div className="pg-cont">
            <h1 className="pg-text">Page3</h1>
            </div>:null}
            {pageLen>3?<div className="pg-cont">
            <h1 className="pg-text">Page4</h1>
            </div>:null}
            {pageLen>4?<div className="pg-cont">
            <h1 className="pg-text">Page5</h1>
            </div>:null}
            <div className="create-pg-cont">
                <img src={addimage} alt="..." className="addimg"/>
                <h1 className="create-text">Create a new project</h1>
            </div>
           
        </div>
    </div>
    )
}
export default SideBar;