import React from "react";
import './pop.css';
import { Grid } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from "@mui/material";
import {RadioGroup,FormControl,FormControlLabel,Radio } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router";

const BootstrapDialogs = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
    
  
 function VideoUploadCard(props) {
      const history=useHistory();
      const {open,setOpen} =props;
      const [linkType,setLinkType]=React.useState("")
      const [videoLink,setVideoLink]=React.useState("")
      const [openPopUp,setOpenPopUp]=useState(true)
      const pageId=props.pageId
      const pageName=props.pageName
      const token=props.token
      console.log(openPopUp)
      console.log(linkType)
      console.log(videoLink)

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    function navigateVideoArea(){
      if(linkType !== "" && videoLink !== ""){
        history.push({
          pathname:'/videoarea',
          state:{
              pageId:pageId,
              pageName:pageName,
              linkType:linkType,
              videoLink:videoLink,
              token:token
          }
      })   
      }
    }
  
    return (
      <div>
        <BootstrapDialogs
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          
        >
          <DialogContent dividers style={{width:480,height:440,overflowX:'hidden',overflowY:"hidden"}}>
            <Typography gutterBottom>
            <Grid className="det-cont">
            <div >
            <div container>
                <div item xs={12} className="tx-grid-cont">
                    <h1 className="vd-txs">Add Video Area</h1>
                </div>
                <div className="content-grid">
                <div>
                    <h1 className="lk-tx">Video Link Type</h1>
                </div>
                <div item xs={12} style={{marginLeft:"15px"}}>
                    <FormControl>
                        <RadioGroup style={{marginTop:"15px"}} name="videoType" onChange={(e)=>setLinkType(e.target.value)}>
                            <FormControlLabel value="Youtube" control={<Radio/>} label="Youtube" className="radio1"/>
                            <FormControlLabel value="Vimeo" control={<Radio/>} label="Vimeo" className="radio2"/>
                            <FormControlLabel value="External Link" control={<Radio/>} label="External Link" className="radio3"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <h1 variant="h1" className="vd-lk-tx">Add Video Link</h1>
                    <input type="text" className="inp-lk" value={videoLink} onChange={(e)=>setVideoLink(e.target.value)}/>
                </div>
                </div>
                <div className="cd-btn-cont">
                   <button className="cd-btn-tx" onClick={()=>setOpen(false)} onClose={handleClose}>Cancel</button>
                    <button className={`${linkType !== "" && videoLink !== "" ? "cd-btn-tx3" : "cd-btn-tx2"}`} 
                    onClick={navigateVideoArea}
                    >Set Location</button>
                </div>
            </div>
        </div>  
            </Grid>
        </Typography>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </BootstrapDialogs>
      </div>
    );
  }


export default VideoUploadCard;