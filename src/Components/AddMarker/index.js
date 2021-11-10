import React, { Component } from 'react';
import location from "../../Assets/Images/loc.png";
import audit from "../../Assets/Images/ad1.jpg";
import NavBar from "../NavItem";
import './marker.css';
import { useState } from 'react';
import MarkerPopUp from '../MarkerPop';
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AddMarker=()=>{
    const [cursor, setCursor] = useState('crosshair');
    const [open,setOpen]=useState(false);
    const [x,setx]=useState(null)
    const [y,sety]=useState(null)
    function onMouseMove(e) {
        setx(e.screenX)
        sety(e.screenY)
      }
      
     console.log(x,y,"coordinates") 
    return(
        <>
        <div>
            <NavBar/>
            <div style={{ backgroundImage: `url(${audit})` }} className="mark-img" onMouseUpCapture={onMouseMove} onClick={()=>setOpen(true)}> 
                <img src={location} style={{position:"absolute",top:`${y}px`,left:`${x}px`,height:"40px",width:"60px"}}/>     
            </div>
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
