import React, { Component } from 'react';
import location from "../../Assets/Images/loc.png";
import audit from "../../Assets/Images/ad1.jpg";
import NavBar from "../NavItem";
import './marker.css';
import { useState } from 'react';
import MarkerPopUp from '../MarkerPop';
import axios from "axios";
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AddMarker=(props)=>{
    const [cursor, setCursor] = useState('crosshair');
    const [open,setOpen]=useState(false);
    const [x,setx]=useState(null)
    const [y,sety]=useState(null)
    const TransVideo=props.location.state.TransVideo
    const token=props.location.state.token
    const markerName=props.location.state.markerName
    const page=props.location.state.pageId
    const destinationLink=props.location.state.destinationLink
    const destinationType=props.location.state.destinationType
    const VisibileLabel=props.location.state.VisibileLabel
    //const markerPosition=(x,y)
    console.log(TransVideo,'trans video')
    console.log(token)
    console.log(markerName)
    console.log(page,'pagesid')
    console.log(destinationLink,'deslink')
    console.log(destinationType,'destype')
    console.log(VisibileLabel,'vslabel')

    var formData=new FormData();  
    formData.append('files.TransVideo',TransVideo)
    formData.append('data',JSON.stringify({
      'markerName':markerName,
      'page':page,
      'destinationLink':destinationLink,
      'destinationType':'Link',
      "VisibileLabel": VisibileLabel,
      "markerPosition":`${x},${y}`
    }))
  
    function postMarker(){
      axios({
          method: "post",
          url: "http://18.222.221.0:1337/markers",
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
    function onMouseMove(e) {
        setx(e.screenX)
        sety(e.screenY)
      }   
     console.log(x,y,"coordinates") 
    return(
        <>
        <div>
            <NavBar/>
            <div style={{ backgroundImage: `url(${audit})` }} className="mark-img" onMouseUpCapture={onMouseMove} onClick={()=>setOpen(true)} onClick={postMarker}> 
                <img src={location} style={{position:"absolute",top:`${y}px`,left:`${x}px`,height:"40px",width:"60px"}}/>     
            </div>
            {/*<div>
              <button onClick={postMarker}>click</button>
            </div>*/}
        </div>
        <MarkerPopUp open={open} setOpen={setOpen} style={{position:"absolute",top:`${y}px`,left:`${x}px`}}/>
      </>  
    )
}
export default AddMarker;


{/*const AnyReactComponent = ({  img_src }) => <div><img src={location} className="YOUR-CLASS-NAME" style={{}} /></div>;

class AddMarker extends Component {
  constructor(props){
    super(props);
    this.state = {
        markers: [],
    }
  }

  componentDidMount(){
    // or you can set markers list somewhere else
    // please also set your correct lat & lng
    // you may only use 1 image for all markers, if then, remove the img_src attribute ^^
    this.setState({
      markers: [{lat: 59, lng: 30, img_src: location},{lat: 59, lng: 30, img_src: location},{lat: 59, lng: 30,  img_src: location}],
    });
  }

  render() {
    return (
        <div style={{ backgroundImage: `url(${audit})` }} className="mark-img" >   
            {this.state.markers.map((marker, i) =>{
              return(
                <AnyReactComponent
                  lat={marker.lat}
                  lng={marker.lng}
                  img_src={marker.img_src}
                />
              )
            })}      
      </div>
    );
  }
}
export default AddMarker;*/}
