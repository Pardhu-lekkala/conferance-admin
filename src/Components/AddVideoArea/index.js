import React from "react";
import NavBar from "../NavItem";
import areaimage from "../../Assets/Images/vdarea.png";
import './video.css'
import VideoPlayer from "../VideoPlayer";
import DrawRectangle from "../DrawRectangle";
import axios from "axios";

const AddVideoArea=(props)=>{
    const pageId=props.location.state.pageId;
    const pageName=props.location.state.pageName;
    const linkType=props.location.state.linkType;
    const videoLink=props.location.state.videoLink;
    const token=props.location.state.token;
    console.log(pageId)
    console.log(pageName)
    console.log(linkType)
    console.log(videoLink)
    console.log(token)
    var formData=new FormData();
    formData.append('data',JSON.stringify({
        'name':pageName,
        'page':pageId,
        'videoType':linkType,
        'videoURL':videoLink,
        'position':"112,145,214,320"
      }))

      function postVideoArea(){
        axios({
            method: "post",
            url: "http://18.222.221.0:1337/video-areas",
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization":"Bearer"+" "+token,
            },
          })
            .then(function (response) {
              console.log(response)  
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
                <button className="sv-btn">Save</button>
            </div>
            <DrawRectangle/>
            </div>
        </div>
    )
}
export default AddVideoArea;