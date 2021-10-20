import React,{useRef}from "react";
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import "./custom.css";
import play from "../../Assets/Images/Frame.png"
import { useState } from "react";

const CustomLogin=()=>{
    const fileInputRef=useRef();
  
  const handleChange=(e) =>{
    // Logic to be implemented

  }
    return(
        <div className="cstm-main-cont">
            <div>
                <NavBar/>
            </div>
            <div className="cstm-content-cont">
            <div>
            <SideBar/>
            </div>
            <div className="upload-cont">
                <h1 className="cstm-head">Cutomize Login Page</h1>
                <div className="upload-cont-1">
                 <label htmlFor="Btn1" className="img-para">Upload Background Image<span style={{color:"red"}}>*</span>
                 <span style={{fontWeight:"300",color:"#8391A7",fontStyle:"normal"}}>(Image is mandatory)</span></label> <br/>  
                <button id="Btn1" onClick={()=>fileInputRef.current.click()} className="upload-btn">Upload </button>
                <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden/>
                <p className="img-para2">JPG,PNG,GIF Formats are supported</p>
                </div>

                <div className="upload-cont-1" style={{marginTop:"15px"}}>
                 <label htmlFor="Btn2" className="img-para">Upload Background Video</label> <br/>  
                <button id="Btn2" onClick={()=>fileInputRef.current.click()} className="upload-btn">Upload </button>
                <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden/>
                <p className="img-para2">MP4,FLV Formats are supported</p>
                </div>

                <div className="upload-cont-1" style={{marginTop:"15px"}}>
                 <label htmlFor="Btn" className="img-para">Upload Transition Video</label> <br/>  
                <button id="Btn" onClick={()=>fileInputRef.current.click()} className="upload-btn">Upload </button>
                <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden/>
                <p className="img-para2">MP4,FLV Formats are supported</p>
                </div>

                <div >
                    <button className="pr-btn">Preview</button>
                </div>
                <div>
                    <button className="cs-btn">Customize</button>
                </div>
                </div>
                <div className="btn-cont2">
                    <img src={play} alt="..." className="play-img"/>
                    <button className="prev-btn">Preview</button>
                </div>
            </div>
        </div>
        
    )
}
export default CustomLogin;