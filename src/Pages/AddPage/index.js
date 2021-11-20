import React,{useRef} from "react";
import { useEffect } from 'react';
import NavBar from "../../Components/NavItem";
import SideBar from "../../Components/NavItem/SideBar";
import './page.css';
import edit3 from "../../Assets/Images/edit2.png";
import del from '../../Assets/Images/delete.png';
import loc from '../../Assets/Images/location.png';
import { useState } from "react";
import swap from "../../Assets/Images/swap.png";
import report from "../../Assets/Images/report_problem.png";
import plus from  "../../Assets/Images/plus.png";
import VideoUploadCard from "../../Components/popup";
import MarkerCard from "../../Components/PopUp2";
import axios from "axios";
import Loader from "react-loader-spinner";
import MarkData from "../../Components/MarkData";
import arrow2 from "../../Assets/Images/Add New.png";
import edit from "../../Assets/Images/edit.png";
import addimage from "../../Assets/Images/addimg.png";
import ProjectDetails from "../../Components/DetailsCard";
import ProjectPopUp from "../../Components/ProjectPop";
import { useHistory } from "react-router";
import DeletePop from "../../Components/Delete Pop";
import DeleteVideoPop from "../../Components/Delete Video Pop";
import EditMarkerPop from "../../Components/EditMarkerPop";
import EditVideoPop from "../../Components/EditVideoPop";
import {Link,BrowserRouter as Router,Route } from "react-router-dom";

const AddPage=(props)=>{
    const history=useHistory();
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
    const [opened,setOpened]=useState(false);
    const [opend,setopend]=useState(false);
    const [openD,setOpenD]=useState(false);
    const [openVd,setOpenVd]=useState(false);
    const [openM,setOpenM]=useState(false);
    const [openV,setopenV]=useState(false);
    const [pageId,setPageId]=useState();
    const [loader,setLoader]=React.useState(false);
    const [project,setProject]=React.useState("");
    const [token,setToken]=React.useState("");
    const [id,setId]=React.useState("");
    const [labelSwitch,setLabel]=React.useState("LABEL-OFF");
    const [pages,setPages]=React.useState("");
    const [markers,setMarkers]=React.useState("");
    const [videoArea,setVideoArea]=React.useState("");
    const [click,setClick]=React.useState("");
    const [click1,setClickOne]=React.useState(false);
    const [click2,setClickTwo]=React.useState(false);
    const [click3,setClickThree]=React.useState(false);
    const [click4,setClickFour]=React.useState(false);
    const [click5,setClickFive]=React.useState(false);
    const [pageNameData,setPageNameData]=React.useState("");
    const [bckImg,setBckImg]=React.useState(null);
    const [bckVideo,setBckresVideo]=React.useState(null);
    const [pgIcon,setPgIcon]=React.useState(null);
    const [bckImgClick,setBckImgClick]=React.useState(false);
    const [iconClick,setIconClick]=React.useState(false);
    const [bckVdClick,setBckVdClick]=React.useState(false);
    const [deleteMarkerId,setDeleteMarkerId]=React.useState(null);
    const [deleteVideoId,setDeleteVideoId]=React.useState(null);
    const [editMarkerId,setEditMarkerId]=React.useState(null);
    const [editVideoId,setEditVideoId]=React.useState(null);
    
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
    let pageNames=props.location.state.pageName;
    let pageLength=pages.length;
    let markerLength=markers.length;
    let vdLength=videoArea.length;
    let currentPageId=props.location.state.pageId;
    const [currentPagesId,setCurrentPageId]=React.useState(currentPageId)
    console.log(currentPagesId,"crpgid")
    //let resPageName=pages[0].pageName
    //console.log(resPageName,'pagggggg')
    const baseURL=`https://api-meta.eskoops.com/projects/${ids}`
    console.log(pages,"pages")
    console.log(markers,"markersdata")
    console.log(videoArea,"vdareadata")
    console.log(bckImg,"bckimgres")
    console.log(bckVideo,"bckvdres")
    console.log(pgIcon,"iconres")
    console.log(pageLength,"pagelen")
    console.log(markerLength,"markerlen")
    console.log(vdLength,"vdlength")
    console.log(id)
    console.log(pageId)
    console.log(backgroundImage)
    console.log(backgroundVideo)
    console.log(pageIcon)
    console.log(token)
    console.log(click1,"clkevent")
    console.log(click2,'clkeven2')
    console.log(click3,'clkevent3')
    console.log(click4,'clkevent4')
    console.log(bckImgClick,"bckingclick")
    console.log(bckVdClick,"bckvdclick")
    console.log(iconClick,'iconclick')

    const clickToggle=()=>{
        click ? setClick(false) : setClick(true)
      } 

    function navigateCreate(){
        history.push({
            pathname:'/newpage',
            state:{
                projectId:ids,
                project:projects,
                token:tokens
            }
        })
    }

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
       {/*formData.append('files.backgroundImage',backgroundImage)
        formData.append('files.backgroundVideo',backgroundVideo)
        formData.append('files.pageIcon',pageIcon)*/}
        if(bckImgClick==true){
            formData.append('files.backgroundImage',backgroundImage)
        }
        if(bckVdClick==true){
            formData.append('files.backgroundVideo',backgroundVideo)
        }
        if(iconClick==true){
            formData.append('files.pageIcon',pageIcon)
        }

    formData.append('data',JSON.stringify({
        'project':id,
        'pageName':pageName
    }))

    function updatePage(){
        axios({
            method: "PUT",
            url: `https://api-meta.eskoops.com/pages/${currentPagesId}`,
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization":"Bearer"+" "+token,
            },
          })
            .then(function (response) {
              console.log(response,"updatedresponse")  
              console.log(response.data.id);
              setPageId(response.data.id)
            })
            .catch(function (response) {
              console.log(response);
            });
    }
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPages(response.data.pages,"145data");
          console.log(response.data,"response")
        });
      }, []);
    

    


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
    
    function getMappedData() {
        if (pages !== "") { 
          return pages.map(item =>{
              return <div>{item}</div>;
          })
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
                    <div className="side-main-cont">
                    <div className="box-cont">
                        <div className="conf-cont">
                            <div className="cont-pro-cont">
                            <img src={arrow2} alt="..." className="arr-img" onClick={()=>{setOpened(true)}}/>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <h1 className="project-name">{projects}</h1>
                            {ids !== undefined?<h1 className="project-id">{`${ids}`}</h1>:null}
                            </div>
                            <img src={edit} alt="..." className="edit-img"/>
                            </div>
                        </div>
                        
                    <ProjectDetails open={open} setOpen={setOpen} projectName={props.projectName} accessCode={props.accessCode}/>
                    {pages!==""?<div>
                        <div className="login-pg-cont">
                            <h1 className="login-text">Login Page</h1>  
                        </div>
                        {pages.map((e)=>{
                            return (
                                <Router>
                                <div className="pg-cont" onClick={() => {
                                    clickToggle(true);
                                    setCurrentPageId(e.id);
                                    setPageName(e.pageName);
                                    setBckImg(e.backgroundImage.name);
                                    setBckresVideo(e.backgroundVideo.name);
                                    setPgIcon(e.pageIcon.name);
                                    setMarkers(e.markers);
                                    setVideoArea(e.video_areas);
                                    }}>
                                <Link to={"addpage/"+e.id}><h1 className="pg-text2">{`${e.pageName}-${e.id}`}</h1></Link>
                                </div>
                                </Router>
                           );})}
                    </div>:null}
                   
                    <div className="create-pg-cont" onClick={navigateCreate}>
                        <img src={addimage} alt="..." className="addimg" />
                        <h1 className="create-text">Create a new Page</h1>
                    </div>
                
                </div>
            </div>
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
                        <div style={{display:"flex",flexDirection:"row"}}>
                        <div onClick={() => {setBckImgClick(true);}}>
                        <button className="btn-up" onClick={()=>fileInputRef.current.click()}>UPLOAD</button>
                        </div>
                        <div style={{marginLeft:"10px"}}>
                        <button className="btn-prev">Preview</button>
                        </div>
                        </div>
                        <input onChange={(e)=>handleBackground(e)} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden/>
                        {imgName !== "" && (fileType == "image/png" || fileType == "image/jpeg" || fileType == "image/gif") && fileSize <20 &&(
                        <div className="uploaded">
                        <p className="upload-text">{imgName} uploaded {fileSize} MB</p>
                        <img src={swap} alt="..." className="swap-img"/>
                        </div>)}
                        {bckImg!==null?<div className="uploaded">
                        <p className="upload-text">{bckImg}</p>
                        <img src={swap} alt="..." className="swap-img"/>
                        </div>:null}

                        {/**********************CONDITION FOR FILE FORMATE******************************************/}
                        {fileType !== "image/jpg" || fileType !== "image/png" || fileType !== "image/gif" && 
                        (<div className="uploaded-2">
                        <img src={report} alt="..." className="swap-img" style={{marginRight:"10px"}}/>    
                        <p className="upload-text">File format not supported.Please upload png,jpg,gif</p>
                        </div>)}
                         {/************************************START CONDITION*****************************************/}
                        {imgName == "" && bckImg==null &&
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
                        <div style={{display:"flex",flexDirection:"row"}}>
                        <div onClick={() => {setIconClick(true);}}>
                        <button className="btn-up1" onClick={()=>fileIconRef.current.click()}>UPLOAD</button>
                        </div>
                        <div style={{marginLeft:"10px"}}>
                        <button className="btn-prev">Preview</button>
                        </div>
                        </div>
                        <input onChange={(e)=>handlePageIcon(e)} multiple={false} ref={fileIconRef} type='file' accept="image/*" hidden/>
                        {iconName !== "" && (fileIconType == "image/png" || fileIconType == "image/jpeg" || fileIconType == "image/gif") && fileIconSize <20 &&(
                        <div className="uploaded">
                        <p className="upload-text">{iconName} uploaded {fileIconSize} MB</p>
                        <img src={swap} alt="..." className="swap-img" style={{marginLeft:"6rem"}}/>
                        </div>)}
                        {pgIcon!==null?<div className="uploaded">
                        <p className="upload-text">{pgIcon}</p>
                        <img src={swap} alt="..." className="swap-img"/>
                        </div>:null}
                    </div>
 {/*************************************************UPLOAD BACKGROUND VIDEO**************************************************************************/}                   
                    <div className="pg3">
                        <h1 className="bg-tx1">Upload Background Video</h1>
                        <div style={{display:"flex",flexDirection:"row"}}>
                        <div onClick={() => {setBckVdClick(true)}}>
                        <button className="btn-up1" onClick={()=>fileVideoRef.current.click()}>UPLOAD</button>
                        </div>
                        <div style={{marginLeft:"10px"}}>
                        <button className="btn-prev">Preview</button>
                        </div>
                        </div>
                        <input onChange={(e)=>handleBackgroundVideo(e)} multiple={false} ref={fileVideoRef} type='file' accept="image/*" hidden/>
                        {bckVideoName !== "" && (filebckVideoType == "image/png" || filebckVideoType == "image/jpeg" || filebckVideoType == "image/gif") && fileBckVideoSize <20 &&(
                        <div className="uploaded">
                        <p className="upload-text">{bckVideoName} uploaded {fileBckVideoSize} MB</p>
                        <img src={swap} alt="..." className="swap-img" style={{marginLeft:"6rem"}}/>
                        </div>)}
                        {bckVideo!==null?<div className="uploaded">
                        <p className="upload-text">{bckVideo}</p>
                        <img src={swap} alt="..." className="swap-img"/>
                        </div>:null}
                         {/************************************START CONDITION*****************************************/}
                         {bckVideoName == "" && bckVideo==null &&
                        <p className="img-para2">PNG,JPG,GIF</p>}
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",width:"350px"}} onClick={()=>{updatePage();setLoader(true)}}>
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
                    <button className="btn-add" onClick={()=>setopend(true)}>Add New Video<span><img src={plus} className="plus-img"/></span></button>
                </div>
                <div className="content-add-cont">
                    <div className="content-header-cont">
                        <h1 className="hd-1">LINK</h1>
                        <h1 className="hd-2">VIDEO TYPE</h1>
                        <h1 className="hd-3">LOCATION</h1>
                    </div>
                    {videoArea!==""?<div>
                        {videoArea.map((e)=>{
                            return (
                                <div className="data-container">
                                <div style={{width:"570px"}}>
                                <p className="data1">{e.videoURL}</p>
                                </div>
                                <div style={{width:"220px"}}>
                                    <button className="des-btn2">{e.videoType}</button>    
                                </div>
                                <div className="coor-cont">
                                    <img src={loc} className="loc-img"/>
                                    <p className="data4">{e.position}</p>
                                </div>
                                <div className="del-cont">
                                    <img src={edit} className="ed-img" onClick={()=>{setopenV(true);setEditVideoId(e.id)}}/>
                                    <img src={del} className="del-img" onClick={()=>{setOpenVd(true);setDeleteVideoId(e.id)}}/>
                                </div>
                            </div>        
                           );})}
                    </div>:null}

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
                    {console.log(markers,"ppppppppp")}
                    {markers!==""?<div>
                        {markers.map((e)=>{
                            return (
                                <div className="data-container">
                                <p className="data1">{e.markerName}</p>
                                <div style={{width:"220px"}}>
                                    <button className="labelOn">{`${e.VisibileLabel?"LABEL-ON":"LABEL-OFF"}`}</button>
                                </div>
                                <div style={{width:"240px",marginLeft:"15px"}}>
                                    <button className="des-btn">Link</button>    
                                <p className="data3">{e.destinationLink}</p>
                                </div>
                                <div className="coor-cont">
                                    <img src={loc} className="loc-img"/>
                                    <p className="data4">{e.markerPosition}</p>
                                </div>
                                <div className="del-cont">
                                    <img src={edit} className="ed-img" onClick={()=>{setOpenM(true);setEditMarkerId(e.id)}}/>
                                    <img src={del} className="del-img" onClick={()=>{setOpenD(true);setDeleteMarkerId(e.id)}}/>
                                </div>
                            </div>     
                           );})}
                    </div>:null}
                   </div> 
            </div>                
            </div>  
            </div>
        </div>  
        <VideoUploadCard open={opend} token={token} setOpen={setopend} pageId={currentPagesId} pageName={pageName} project={project} projectId={ids}/>
        <MarkerCard opens={opens} pageId={currentPagesId} token={token} setOpens={setOpens} project={project} projectId={ids}/>
        <ProjectPopUp open={opened} setOpen={setOpened} project={project} projectId={ids} token={token}/>
        <DeletePop open={openD} setOpen={setOpenD} token={token} pageId={currentPagesId} pageName={pageName} project={project} projectId={ids} deleteId={deleteMarkerId}/>
        <DeleteVideoPop open={openVd} setOpen={setOpenVd} token={token} pageId={currentPagesId} pageName={pageName} project={project} projectId={ids} deleteVideoId={deleteVideoId}/>
        <EditMarkerPop opens={openM} pageId={currentPagesId} editMarkId={editMarkerId} token={token} setOpens={setOpenM} project={project} projectId={ids}/>
        <EditVideoPop open={openV} token={token} setOpen={setopenV} pageId={currentPagesId} editVideoId={editVideoId} pageName={pageName} project={project} projectId={ids}/>
    </>
    )
}
export default AddPage;