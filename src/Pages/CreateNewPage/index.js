import React,{useRef}from "react";
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import "./index.css";
import edit from "../../Assets/Images/Vector.png";
import edit2 from "../../Assets/Images/edit2.png";
import { useHistory } from "react-router";
import ProjectPopUp from "../../Components/ProjectPop";
import { useState } from "react";


const CreateNewPage=(props)=>{
    console.log(props.location.state.projectId,"mainproid")
    const project=props.location.state.project;
    const accessCode=props.location.state.accessCode;
    const token=props.location.state.token;
    const projectId=props.location.state.projectId;
    const [open,setOpens]=useState(false);
    console.log(token,"tokenjwt")
    const history=useHistory()
    function navigateToCustomLogin(){
        history.push("/customlogin")
    }
    
    return(
        <>
        <div className="cstm-main-cont">
            <div>
                <NavBar/>
            </div>
            <div className="cstm-content-cont">
            <div>
            <SideBar projectName={props.location.state ? props.location.state.project:null}
            accessCode={props.location.state ? props.location.state.accessCode : null}
            projectId={props.location.state?props.location.state.projectId:null}
            />
            </div>
            <div className="new-main-cont">
                <div className="new-img-cont">
                </div>
                <div className="head-new-cont">
                <h1 className="new-head">Create your Pages</h1>
                </div>
                <button className="new-btn" onClick={()=>setOpens(true)}>Create new page</button>
                </div>
                <div className="btn-cont3">
                    <div >
                    <button className="prev-btn2"><span><img src={edit2} alt="..." className="play-img2"/></span>Preview</button>
                    </div>
                    <div >
                    <button className="prev-btn2" onClick={navigateToCustomLogin}><span><img src={edit} alt="..." className="play-img2"/></span>Edit</button>
                    </div>
                </div>
            </div>
        </div> 
        <ProjectPopUp open={open} setOpen={setOpens} project={project} accessCode={accessCode} token={token} projectId={projectId}/>
        </> 
    )
}
export default CreateNewPage;