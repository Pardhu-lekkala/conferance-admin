import React,{useRef}from "react";
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import "./index.css";
import play from "../../Assets/Images/Frame.png"
import { useState } from "react";
import edit from "../../Assets/Images/Vector.png";
import edit2 from "../../Assets/Images/edit2.png";
import { useHistory } from "react-router";

const CreateNewPage=(props)=>{
    const history=useHistory()
    function navigateToCustomLogin(){
        history.push("/customlogin")
    }
    function navigateAddPage(){
        history.push({
            pathname:'/addpage',
            state:{
                project:props.location.state ? props.location.state.project:null,
                accessCode:props.location.state ? props.location.state.accessCode : null,
            }
        })
    }
    return(
        <div className="cstm-main-cont">
            <div>
                <NavBar/>
            </div>
            <div className="cstm-content-cont">
            <div>
            <SideBar projectName={props.location.state ? props.location.state.project:null}
            accessCode={props.location.state ? props.location.state.accessCode : null}
            />
            </div>
            <div className="new-main-cont">
                <div className="new-img-cont">
                </div>
                <div className="head-new-cont">
                <h1 className="new-head">Login Page Created Successfully</h1>
                </div>
                <button className="new-btn" onClick={navigateAddPage}>Create new page</button>
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
    )
}
export default CreateNewPage;