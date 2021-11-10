import React,{useRef}from "react";
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import "./custom.css";
import play from "../../Assets/Images/Frame.png"
import { useState } from "react";
import swap from "../../Assets/Images/swap.png";
import report from "../../Assets/Images/report_problem.png";
import { useHistory } from "react-router";
import axios from "axios";

const CustomLogin=(props)=>{
    const history=useHistory();
    const fileInputRef=useRef();
    const fileVideoRef=useRef();
    const fileTransitionRef=useRef();
    //const fileType=["jpg","png","gif"]
    const [backgroundImage,setImage]=React.useState()
    const [imgName,setImgName]=React.useState("")
    const [fileType,setFileType]=React.useState("")
    const [fileSize,setFileSize]=React.useState(15);
    const [backgroundVideo,setVideo]=React.useState("");
    const [videoName,setVideoName]=React.useState("");
    const [fileVideoType,setFileVideoType]=React.useState("")
    const [fileVideoSize,setFileVideoSize]=React.useState(15);
    const [transVideo,setTransition]=React.useState("");
    const [transitionName,setTransitionName]=React.useState("");
    const [fileTransitionType,setFileTransitionType]=React.useState("")
    const [fileTransitionSize,setFileTransitionSize]=React.useState(15);
    const [id,setId]=React.useState()
{/*******************************************API PROJECT DETAILS***************************************************/} 
    //let files={backgroundImage,backgroundVideo,transVideo}
    //console.log(files.backgroundImage,"bcccccccc")
    console.log(backgroundImage,"cccccccc")
    console.log(id)
    let token=props.location.state.token
    let name=props.location.state.project
    let accesscode=props.location.state.accessCode
    //let id=Math.random();
    let markerColor="red"
    let Description="NA"
    let primaryColor="#ffffff"
    let secondaryColor="#ddddd"
    
    var formData = new FormData();
    formData.append('files.backgroundImage', backgroundImage); 
    formData.append('files.backgroundVideo',backgroundVideo)
    formData.append('files.transVideo',transVideo)
    formData.append('data',JSON.stringify({
        'name':name,
        'markerColor':markerColor,
        'primaryColor':primaryColor,
        'secondaryColor':secondaryColor,
        'Description':"This is Description"
        //'files.backgroundImage':backgroundImage
    }))

    console.log(name,token,accesscode)
    function navigateNewPage(){
        if (imgName !== "" && videoName !== "" && transitionName !== "" && id !== undefined){
            history.push({
                pathname:'/newpage',
                state:{
                    project:props.location.state ? props.location.state.project:null,
                    accessCode:props.location.state ? props.location.state.accessCode : null,
                    token:props.location.state.token,
                    image:backgroundImage,
                    id:id
                }
            })
        }
    }

    async function postProject(){
        navigateNewPage()
        axios({
            method: "post",
            url: "http://18.222.221.0:1337/projects",
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization":"Bearer"+" "+token,
            },
          })
            .then(function (response) {
              console.log(response.data.id);
              setId(response.data.id)
            })
            .catch(function (response) {
              console.log(response);
            });
    }
   

    {/*async function postProject(){
        let data={
            name,
            markerColor,
            Description,
            primaryColor,
            secondaryColor,
            //"backgroundImage":files.backgroundImage
        }
        navigateNewPage()
        let result=await fetch('http://18.222.221.0:1337/projects',{
           method:"POST",
           body:JSON.stringify(data,files.backgroundImage),
           headers:{
               "Content-Type":"application/json",
               "Authorization":"Bearer"+" "+token,
           }
        })
        result=await result.json()
        console.log(result,"projectdetails")
        localStorage.setItem('login',JSON.stringify(result))
    }*/}
    
    
    const handleChange=(e) =>{
        let files=e.target.files
        setImgName(files[0].name)
        setImage(e.target.files[0])
        console.log("data file",files[0])
        let fileLen=files[0].size/1048576
        setFileSize(fileLen)
        setFileType(files[0].type) 
        let reader=new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload=(e)=>{
            console.log("img data",e.target.result)
            //setImage(e.target.result)
            //setImage(files[0])
        }   
    }
    const handleVideoChange=(e) =>{
        let videofiles=e.target.files
        setVideoName(videofiles[0].name)
        setVideo(e.target.files[0])
        console.log("data file",videofiles[0].type)
        let fileVideoLen=videofiles[0].size/1048576
        console.log(fileVideoLen)
        setFileVideoSize(fileVideoLen)
        setFileVideoType(videofiles[0].type)
        let read=new FileReader();
        read.readAsDataURL(videofiles[0])
        read.onload=(e)=>{
            console.log("img data",e.target.result)
            //setVideo(e.target.result)
        }   
    }   
    
    const handleTransitionChange=(e) =>{
        let transitionfiles=e.target.files
        setTransitionName(transitionfiles[0].name)
        setTransition(e.target.files[0])
        console.log("data file",transitionfiles[0].type)
        let fileTransitionLen=transitionfiles[0].size/1048576
        setFileTransitionSize(fileTransitionLen)
        setFileTransitionType(transitionfiles[0].type)
        let readTrans=new FileReader();
        readTrans.readAsDataURL(transitionfiles[0])
        readTrans.onload=(e)=>{
            console.log("img data",e.target.result)
            //setTransition(e.target.result)
        }   
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
            <div className="upload-cont">
                <h1 className="cstm-head">Cutomize Login Page</h1>
 {/*************************************************IMAGE UPLOAD*********************************************************/}               
                <div className="upload-cont-1">
                 <label htmlFor="Btn1" className="img-para">Upload Background Image<span style={{color:"red"}}>*</span>
                 <span style={{fontWeight:"300",color:"#8391A7",fontStyle:"normal"}}>(Image is mandatory)</span></label> <br/>  
                <button id="Btn1" onClick={()=>fileInputRef.current.click()} className="upload-btn">Upload </button>
                <input onChange={(e)=>handleChange(e)} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden/>
                {imgName !== "" && (fileType == "image/png" || fileType == "image/jpeg" || fileType == "image/gif") && fileSize <20 &&(
                <div className="uploaded">
                <p className="upload-text">{imgName} uploaded {fileSize} MB</p>
                <img src={swap} alt="..." className="swap-img"/>
                </div>)}
                {/* *********************CONDITION FOR FILE FORMATE******************************************/}
                {fileType !== "image/jpg" || fileType !== "image/png" || fileType !== "image/gif" && 
                (<div className="uploaded-2">
                <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>    
                <p className="upload-text">File format not supported.Please upload png,jpg,gif</p>
                </div>)}
                {/************************************START CONDITION*****************************************/}
                {imgName == "" &&
                <p className="img-para2">PNG,JPG,GIF Formats are supported</p>}
                </div>
                {/************************************SIZE CONDITION**************************************/}
                {fileSize > 20 &&
                <div className="uploaded-2">
                <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>
                <p className="upload-text">Maximum upload size is 20 MB</p>
                </div>}
{/*************************************************VIDEO UPLOAD*********************************************************/}
                <div className="upload-cont-1" style={{marginTop:"15px"}}>
                 <label htmlFor="Btn2" className="img-para">Upload Background Video</label> <br/>  
                <button id="Btn2" onClick={()=>fileVideoRef.current.click()} className="upload-btn">Upload </button>
                <input onChange={(e)=>handleVideoChange(e)} multiple={false} ref={fileVideoRef} type='file' accept="video/*"  hidden/>
                {videoName !== "" && (fileVideoType == "video/mp4" || fileVideoType == "video/flv") && fileVideoSize <20 &&(
                <div className="uploaded">
                <p className="upload-text">{videoName} uploaded {fileVideoSize} MB</p>
                <img src={swap} alt="..." className="swap-img"/>
                </div>)}
                {/* *********************CONDITION FOR FILE FORMATE******************************************/}
                {(fileVideoType !== "video/mp4" && fileVideoType !== "video/flv" && videoName !== "")? 
                (<div className="uploaded-2">
                <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>    
                <p className="upload-text">File format not supported.Please upload mp4,flv</p>
                </div>) : null}
                {/************************************START CONDITION*****************************************/}
                {videoName == "" &&
                <p className="img-para2">MP4,FLV Formats are supported</p>}
                </div>
                {/************************************SIZE CONDITION**************************************/}
                {fileVideoSize > 20 &&
                (<div className="uploaded-2">
                <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>
                <p className="upload-text">Maximum upload size is 20 MB</p>
                </div>)}
                
{/*********************************************TRANSITION VIDEO UPLOAD************************************************************** */}
                <div className="upload-cont-1" style={{marginTop:"15px"}}>
                 <label htmlFor="Btn" className="img-para">Upload Transition Video</label> <br/>  
                <button id="Btn" onClick={()=>fileTransitionRef.current.click()} className="upload-btn">Upload </button>
                <input onChange={(e)=>handleTransitionChange(e)} multiple={false} ref={fileTransitionRef} type='file' accept="video/*" hidden/>
                {transitionName !== "" && (fileTransitionType == "video/mp4" || fileTransitionType == "video/flv") && fileTransitionSize <20 &&(
                <div className="uploaded">
                <p className="upload-text">{transitionName} uploaded {fileTransitionSize} MB</p>
                <img src={swap} alt="..." className="swap-img"/>
                </div>)}
                {/* *********************CONDITION FOR FILE FORMATE******************************************/}
                {(fileTransitionType !== "video/mp4" && fileTransitionType !== "video/flv" && transitionName !== "")?
                (<div className="uploaded-2">
                <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>    
                <p className="upload-text">File format not supported.Please upload mp4,flv</p>
                </div>):null}
                {/************************************START CONDITION*****************************************/}
                {transitionName == "" &&
                <p className="img-para2">MP4,FLV Formats are supported</p>}
                </div>
                {/************************************SIZE CONDITION**************************************/}
                {fileTransitionSize > 20 &&
                <div className="uploaded-2">
                <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>
                <p className="upload-text">Maximum upload size is 20 MB</p>
                </div>}
                

                <div >
                    <button className="pr-btn">Preview</button>
                </div>
                <div>
                    <button className={`${imgName == "" ? "cs-btn" : "cs-btn2"}`} onClick={postProject}>Customize</button>
                </div>
                </div>
                <div className="btn-cont2">
                    <img src={play} alt="..." className="play-img2"/>
                    <button className="prev-btn">Preview</button>
                </div>
            </div>
        </div>  
    )
}
export default CustomLogin;