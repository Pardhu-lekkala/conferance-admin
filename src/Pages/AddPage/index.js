import React,{useRef} from "react";
import { useEffect } from 'react';
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import './page.css';
import edit3 from "../../Assets/Images/edit2.png";
import { useState } from "react";
import swap from "../../Assets/Images/swap.png";
import report from "../../Assets/Images/report_problem.png";
import plus from  "../../Assets/Images/plus.png";
import VideoUploadCard from "../../Components/popup";
import MarkerCard from "../../Components/PopUp2";
import axios from "axios";
import Loader from "react-loader-spinner";
import MarkData from "../../Components/MarkData";

const AddPage=(props)=>{
    const [pageName,setPageName]=useState("");
    const fileInputRef=useRef();
    const fileIconRef=useRef();
    const fileVideoRef=useRef();
    const [backgroundImage,setImage]=React.useState()
    const [imgName,setImgName]=React.useState("")
    const [fileType,setFileType]=React.useState("")
    const [fileSize,setFileSize]=React.useState(15);
    const [pageIcon,setIcon]=React.useState("");
    const [iconName,setIconName]=React.useState("");
    const [fileIconType,setFileIconType]=React.useState("");
    const [fileIconSize,setFileIconSize]=React.useState(15);
    const [backgroundVideo,setBckVideo]=React.useState("");
    const [bckVideoName,setbckVideoName]=React.useState("");
    const [filebckVideoType,setFileBckVideoType]=React.useState("")
    const [fileBckVideoSize,setFileBckVideoSize]=React.useState(15);
    const [open,setOpen]=useState(false);
    const [opens,setOpens]=useState(false);
    const [pageId,setPageId]=useState();
    const [loader,setLoader]=React.useState(false);
    const [project,setProject]=React.useState("");
    const [token,setToken]=React.useState("");
    const [id,setId]=React.useState("");
    const [labelSwitch,setLabel]=React.useState("LABEL-OFF")
    let projects=props.location.state.project;
    let tokens=props.location.state.token;
    let ids=props.location.state.projectId;
    let markerName=props.location.state.markerName;
    let label=props.location.state.label;
    let destinationType=props.location.state.destinationType;
    let destinationLink=props.location.state.destinationLink
    let xCoordinate=props.location.state.xCoordinate;
    let yCoordinate=props.location.state.yCoordinate;
    let markVideo=props.location.state.transVideo;
    console.log(id)
    console.log(pageId)
    console.log(backgroundImage)
    console.log(backgroundVideo)
    console.log(pageIcon)
    console.log(token)
    //console.log(project)
    useEffect(()=>{
        setProject(projects);
        setToken(tokens);
        setId(ids);
        if (label == true){
            setLabel("LABEL-ON")
        }
    },[])
    var formData=new FormData();
    formData.append('files.backgroundImage',backgroundImage); 
    formData.append('files.backgroundVideo',backgroundVideo);
    formData.append('files.pageIcon',pageIcon);
    formData.append('data',JSON.stringify({
        'project':id,
        'pageName':pageName
    }))

    function postPage(){
        axios({
            method: "post",
            url: "http://18.222.221.0:1337/pages",
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization":"Bearer"+" "+token,
            },
          })
            .then(function (response) {
              console.log(response)  
              console.log(response.data.id);
              setPageId(response.data.id)
            })
            .catch(function (response) {
              console.log(response);
            });
    }
   
    //console.log(openPopUp)
    //console.log(opens)
    console.log(pageName)
    const handleBackground=(e) =>{
        let files=e.target.files
        setImgName(files[0].name)
        setImage(e.target.files[0])
        console.log("data file",files[0].type)
        let fileLen=files[0].size/1048576
        setFileSize(fileLen)
        setFileType(files[0].type) 
        let reader=new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload=(e)=>{
            console.log("img data",e.target.result)
            //setImage(e.target.result)
        }   
    }
    const handlePageIcon=(e) =>{
        let iconfiles=e.target.files
        setIconName(iconfiles[0].name)
        setIcon(e.target.files[0])
        console.log("data file",iconfiles[0].type)
        let fileIconLen=iconfiles[0].size/1048576
        console.log(fileIconLen)
        setFileIconSize(fileIconLen)
        setFileIconType(iconfiles[0].type)
        let read=new FileReader();
        read.readAsDataURL(iconfiles[0])
        read.onload=(e)=>{
            console.log("img data",e.target.result)
            //setIcon(e.target.result)
        }   
    }   
    
    const handleBackgroundVideo=(e) =>{
        let bckVideofiles=e.target.files
        setbckVideoName(bckVideofiles[0].name)
        setBckVideo(e.target.files[0])
        console.log("data file",bckVideofiles[0].type)
        let filebckVideoLen=bckVideofiles[0].size/1048576
        setFileIconSize(filebckVideoLen)
        setFileBckVideoType(bckVideofiles[0].type)
        let readTrans=new FileReader();
        readTrans.readAsDataURL(bckVideofiles[0])
        readTrans.onload=(e)=>{
            console.log("img data",e.target.result)
            //setBckVideo(e.target.result)
        }   
    }   
    return(
        <>
        <div className="cstm-main-cont2">
            <div>
                <NavBar/>
            </div>
            <div className="cstm-content-cont2">
            <div className="sidebar-cont">
            <SideBar projectName={props.location.state ? props.location.state.project:null}
            accessCode={props.location.state ? props.location.state.accessCode : null}
            projectId={props.location.state ? props.location.state.projectId:null}
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
                        <input id="inp2" type="text" className="inp-tx" onChange={(e)=>setPageName(e.target.value)} value={pageName}/>
                    </div>
                    <div className="pg2">
{/***********************************************UPLOAD BACKGROUND IMG*******************************************************/}
                        <h1 className="bg-tx">Upload Background Image</h1>
                        <button className="btn-up" onClick={()=>fileInputRef.current.click()}>UPLOAD</button>
                        <input onChange={(e)=>handleBackground(e)} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden/>
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
                        {/************************************SIZE CONDITION**************************************/}
                        {fileSize > 20 &&
                        <div className="uploaded-2">
                        <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>
                        <p className="upload-text">Maximum upload size is 20 MB</p>
                        </div>}
                    </div>
                </div>
{/*********************************************UPLOAD PAGE ICON****************************************************************** */}
                <div className="up2">
                    <div className="pg3">
                        <h1 className="bg-tx1">Upload Page Icon</h1>
                        <button className="btn-up1" onClick={()=>fileIconRef.current.click()}>UPLOAD</button>
                        <input onChange={(e)=>handlePageIcon(e)} multiple={false} ref={fileIconRef} type='file' accept="image/*" hidden/>
                        {iconName !== "" && (fileIconType == "image/png" || fileIconType == "image/jpeg" || fileIconType == "image/gif") && fileIconSize <20 &&(
                        <div className="uploaded">
                        <p className="upload-text">{iconName} uploaded {fileIconSize} MB</p>
                        <img src={swap} alt="..." className="swap-img" style={{marginLeft:"6rem"}}/>
                        </div>)}
                    </div>
 {/*************************************************UPLOAD BACKGROUND VIDEO**************************************************************************/}                   
                    <div className="pg3">
                        <h1 className="bg-tx1">Upload Background Video</h1>
                        <button className="btn-up1" onClick={()=>fileVideoRef.current.click()}>UPLOAD</button>
                        <input onChange={(e)=>handleBackgroundVideo(e)} multiple={false} ref={fileVideoRef} type='file' accept="image/*" hidden/>
                        {bckVideoName !== "" && (filebckVideoType == "image/png" || filebckVideoType == "image/jpeg" || filebckVideoType == "image/gif") && fileBckVideoSize <20 &&(
                        <div className="uploaded">
                        <p className="upload-text">{bckVideoName} uploaded {fileBckVideoSize} MB</p>
                        <img src={swap} alt="..." className="swap-img" style={{marginLeft:"6rem"}}/>
                        </div>)}
                         {/************************************START CONDITION*****************************************/}
                         {bckVideoName == "" &&
                        <p className="img-para2">PNG,JPG,GIF</p>}
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",width:"350px"}} onClick={()=>{postPage();setLoader(true)}}>
                <button className="sv-btn-cont">
                {pageId == undefined &&loader == false?"Save":null}
                {pageId == undefined &&loader == true?
                <Loader type="TailSpin"
                    color="#00BFFF"
                    height={30}
                    width={30}
                    />:null}
                {pageId !== undefined && loader == true?"Saved":null}    
                </button>
                </div>
            </div>
           
 {/**********************************************VIDEO AREA CONTAINER**************************************************************/}           
            <div className="upload-cont3">
                <div className="tx-btn-cont">
                    <h1 className="vd-tx">Setup Video Area</h1>
                    <button className="btn-add" onClick={()=>setOpen(true)}>Add New Video<span><img src={plus} className="plus-img"/></span></button>
                </div>
                <div className="content-add-cont">
                    <div className="content-header-cont">
                        <h1 className="hd-1">LINK</h1>
                        <h1 className="hd-2">VIDEO TYPE</h1>
                        <h1 className="hd-3">LOCATION</h1>
                    </div>  
                </div>
            </div>
{/****************************************************MARKER CONTAINER*****************************************************/}
<div className="upload-cont3">
                <div className="tx-btn-cont">
                    <h1 className="vd-tx">Markers</h1>
                    <button className="btn-add" onClick={()=>setOpens(true)}>Add New Marker<span><img src={plus} className="plus-img"/></span></button>
                </div>
                <div className="content-add-cont">
                    <div className="content-header-cont">
                        <h1 className="mk-1">MARKER NAME</h1>
                        <h1 className="mk-2">LABEL</h1>
                        <h1 className="mk-3">DESTINATION TYPE</h1>
                        <h1 className="mk-4">LOCATION</h1>
                    </div> 
                    <MarkData 
                        markerName={markerName} 
                        transVideo={markVideo}
                        label={labelSwitch} 
                        destinationType={destinationType}
                        destinationLink={destinationLink}
                        xCoordinate={xCoordinate}
                        yCoordinate={yCoordinate}
                    />
                </div>
            </div>                
            </div>  
            </div>

        
        </div>  
        <VideoUploadCard open={open} token={token} setOpen={setOpen} pageId={pageId} pageName={pageName}/>
        <MarkerCard opens={opens} pageId={pageId} token={token} setOpens={setOpens} project={project}/>
    </>
    )
}
export default AddPage;