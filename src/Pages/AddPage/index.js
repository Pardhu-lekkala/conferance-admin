import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import './page.css';
import edit3 from "../../Assets/Images/edit2.png";

const AddPage=(props)=>{
    return(
        <div className="cstm-main-cont2">
            <div>
                <NavBar/>
            </div>
            <div className="cstm-content-cont2">
            <div className="sidebar-cont">
            <SideBar projectName={props.location.state ? props.location.state.project:null}
            accessCode={props.location.state ? props.location.state.accessCode : null}
            />
            </div>
            <div className="content-new-cont4">
            <div className="prev-btn-cont">
                <button className="prev-btn2"><span><img src={edit3} alt="..." className="play-img2"/></span>Preview</button>
            </div>
            <div className="upload-cont2">
                <div className="up1">
                    <div className="pg1">
                        <label htmlFor="inp2" className="pg-nm">Page Name</label><br/>
                        <input id="inp2" type="text" className="inp-tx"/>
                    </div>
                    <div className="pg2">
                        <h1 className="bg-tx">Upload Background Image</h1>
                        <button className="btn-up">UPLOAD</button>
                        <p className="pr-tx">JPG,PNG,GIF</p>
                    </div>
                </div>

                <div className="up2">
                    <div className="pg3">
                        <h1 className="bg-tx1">Upload Background Image</h1>
                        <button className="btn-up1">UPLOAD</button>
                        <p className="pr-tx1">JPG,PNG,GIF</p>
                    </div>
                    <div className="pg3">
                        <h1 className="bg-tx1">Upload Background Image</h1>
                        <button className="btn-up1">UPLOAD</button>
                        <p className="pr-tx1">JPG,PNG,GIF</p>
                    </div>

                </div>

            </div>
            </div>   
            </div>
        </div>  

    )
}
export default AddPage;