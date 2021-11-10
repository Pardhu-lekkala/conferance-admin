import React from "react";
import './pop2.css';
import { Grid } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Switch } from "@mui/material";
import swap from "../../Assets/Images/swap.png";
import { useHistory } from "react-router";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root2': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root2': {
      padding: theme.spacing(1),
    },
  }));
  
  
 function MarkerCard(props) {
      const history=useHistory();
      const fileMarkerVideoRef=useRef();
      const [markerVideo,setMarkerVideo]=React.useState("");
      const [videoMarkerName,setMarkerVideoName]=React.useState("");
      const [fileMarkerVideoType,setFileMarkerVideoType]=React.useState("");
      const [fileMarkerVideoSize,setFileMarkerVideoSize]=React.useState(15);
      const [markerInpName,setMarkerInpName]=React.useState("");
      const [destinationType,setDestinationType]= React.useState("");
      const [markerVideoLink,setMarkerVideoLink]=React.useState("");
      const [labelSwitch,setLabelSwitch]=React.useState(false);
      const {opens,setOpens} =props;
      const id=props.pageId
      const token=props.token
      console.log(id,"pageid")
      console.log(markerVideo)
      console.log(markerInpName)
      console.log(destinationType)
      console.log(markerVideoLink)
      console.log(labelSwitch)

    const switchToggle=()=>{
      labelSwitch ? setLabelSwitch(false) : setLabelSwitch(true)
    }  
    const handleClickOpen = () => {
      setOpens(true);
    };
    const handleClose = () => {
      setOpens(false);
    };
    
    function navigateMarker(){
      if(markerInpName !== "" && destinationType !== "" && markerVideoLink !== "" && markerVideo !== ""){
        history.push({
          pathname:'/markerlocation',
          state:{
              pageId:id,
              token:token,
              markerName:markerInpName,
              destinationType:destinationType,
              destinationLink:markerVideoLink,
              VisibileLabel:labelSwitch,
              TransVideo:markerVideo
          }
      })  
      }
    }
    const handleMarkerVideoChange=(e) =>{
      let markerVideofiles=e.target.files
      setMarkerVideoName(markerVideofiles[0].name)
      setMarkerVideo(e.target.files[0])
      console.log("data file",markerVideofiles[0].type)
      let fileMarkerVideoLen=markerVideofiles[0].size/1048576
      console.log(fileMarkerVideoLen)
      setFileMarkerVideoSize(fileMarkerVideoLen)
      setFileMarkerVideoType(markerVideofiles[0].type)
      let reads=new FileReader();
      reads.readAsDataURL(markerVideofiles[0])
      reads.onload=(e)=>{
          console.log("img data",e.target.result)
          //setMarkerVideo(e.target.result)
      }   
  }   
    return (
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title2"
          open={opens}
        >
          <DialogContent dividers style={{width:480,height:600,overflowX:'hidden'}}>
            <Typography gutterBottom>
            <Grid className="det-cont">
            <div >
            <div container>
                <div item xs={12} className="tx-grid-cont">
                    <h1 className="vd-txs">Add Marker</h1>
                </div>
                <div className="content-grid">
                <div>
                  <h1 className="mk-nm">Marker Name</h1>
                  <input type="text" className="mk-inp" value={markerInpName} onChange={(e)=>setMarkerInpName(e.target.value)}/>
                </div>
                <div>
                  <h1 className="mk-nm">Add Destination Type</h1>
                  <div>
                    <select value={destinationType} onChange={(e)=>setDestinationType(e.target.value)} className="mk-drop">
                      <option className="mk-op">Web Link</option>
                      <option className="mk-op">Youtube Link</option>
                      <option className="mk-op">Vimeo Link</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 className="mk-nm">Add Link</h1>
                  <input type="text" className="mk-inp" value={markerVideoLink} onChange={(e)=>setMarkerVideoLink(e.target.value)}/>
                </div>
                <div style={{marginTop:"15px"}}>
                  <h1 className="mk-nm">Upload Transition Video</h1>
                  <button className="mk-up-btn" onClick={()=>fileMarkerVideoRef.current.click()}>UPLOAD</button>
                  <input onChange={(e)=>handleMarkerVideoChange(e)} multiple={false} ref={fileMarkerVideoRef} type='file' accept="video/*"  hidden/>
                  {videoMarkerName !== "" && (fileMarkerVideoType == "video/mp4" || fileMarkerVideoType == "video/flv") && fileMarkerVideoSize <20 &&(
                  <div className="uploaded">
                  <p className="upload-text">{videoMarkerName} uploaded {fileMarkerVideoSize} MB</p>
                  <img src={swap} alt="..." className="swap-img"/>
                  </div>)}
                  {videoMarkerName == ""?<p className="mk-pr">MP4,FLV....</p>:null}
                </div>
                <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
                  <h1 className="mk-nm">Persistent Label</h1>
                  <Switch value={labelSwitch}  style={{color:"#002E5A"}} onClick={switchToggle}/>
                </div>
                
                </div>
                <div className="cd-btn-cont">
                   <button className="cd-btn-tx" onClick={()=>setOpens(false)} onClose={handleClose}>Cancel</button>
                    <button className={`${markerInpName !== "" && destinationType !== "" && markerVideoLink !== "" && markerVideo !== "" ?
                     "cd-btn-tx3" : "cd-btn-tx2"}`} onClick={navigateMarker}>Set Location</button>
                </div>
            </div>
        </div>  
            </Grid>
        </Typography>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
  }


export default MarkerCard;