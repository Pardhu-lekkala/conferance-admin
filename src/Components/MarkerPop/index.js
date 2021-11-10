import React from "react";
import './markpop.css';
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
  
 function MarkerPopUp(props) {
      const history=useHistory();
      const {open,setOpen} =props;
      const [linkType,setLinkType]=React.useState("")
      const [videoLink,setVideoLink]=React.useState("")
      const [openPopUp,setOpenPopUp]=useState(true)
      console.log(openPopUp)
      console.log(linkType)
      console.log(videoLink)

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    function navigatetoAddPage(){
        history.push("/addpage")
    }
  
    return (
      <div>
        <BootstrapDialogs
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}    
        >
          <DialogContent dividers style={{width:480,height:100,overflowX:'hidden',overflowY:"hidden"}}>
            <Typography gutterBottom>
            <div >
            <div container>
                <h1 className="pop-tx">Are you sure you want locate the marker here?</h1>
            </div>
            <div className="btn-pop-cont">
                <button className="btn-cn" onClick={()=>setOpen(false)} onClose={handleClose}>cancel</button>
                <button className="ad-btn">Add</button>
            </div>
        </div>         
        </Typography>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </BootstrapDialogs>
      </div>
    );
  }
export default MarkerPopUp;