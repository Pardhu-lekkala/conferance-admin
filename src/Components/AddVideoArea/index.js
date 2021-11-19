import React from "react";
import NavBar from "../NavItem";
import areaimage from "../../Assets/Images/vdarea.png";
import './video.css'
import VideoPlayer from "../VideoPlayer";
import DrawRectangle from "../DrawRectangle";
import axios from "axios";
import { useHistory } from "react-router";

const AddVideoArea=(props)=>{
    const history=useHistory()
    const pageId=props.location.state.pageId;
    const pageName=props.location.state.pageName;
    const linkType=props.location.state.linkType;
    const videoLink=props.location.state.videoLink;
    const token=props.location.state.token;
    const project=props.location.state.project;
    const projectId=props.location.state.projectId;
    const vdAreaId=props.location.state.vdAreaId
    const [markUpdate,setMarkUpdate]=React.useState(false)
    console.log(pageId,"vdpgid")
    console.log(pageName)
    console.log(linkType)
    console.log(videoLink)
    console.log(token)
    console.log(project,"name")
    console.log(projectId,"projid")
    console.log(vdAreaId,"vdAreaId")
    console.log(markUpdate,"markupdate")
    var formData=new FormData();
    formData.append('data',JSON.stringify({
        'name':pageName,
        'page':pageId,
        'videoType':linkType,
        'videoURL':videoLink,
        'position':"112,145,214,320"
      }))

      function navigatetoAddPage(){
        history.push({
          pathname:'/addpage',
          state:{
              project:project,
              projectId:projectId,
              token:token,
          }
      })  
    }

      function postVideoArea(){
        axios({
            method: "PUT",
            url: `http://18.222.221.0:1337/video-areas/${vdAreaId}`,
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization":"Bearer"+" "+token,
            },
          })
            .then(function (response) {
              console.log(response) 
              setMarkUpdate(true) 
            })
            .catch(function (response) {
              console.log(response);
            });
          }      
      
    return(
        <div>
            <NavBar/>
            <div style={{ backgroundImage: `url(${areaimage})` }} className="area-image">
            <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end"}} onClick={postVideoArea}>
                {markUpdate==false?<button className="sv-btn">Save</button>:null}
                {markUpdate==true?<button className="sv-btn2" onClick={navigatetoAddPage}>Continue</button>:null}
            </div>
            <DrawRectangle/>
            </div>
        </div>
    )
}
export default AddVideoArea;