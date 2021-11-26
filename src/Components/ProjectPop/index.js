import React from "react";
import { Grid } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from "@mui/material";
import {RadioGroup,FormControl,FormControlLabel,Radio } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router";
import './pops.css';
import axios from "axios";
import Loader from 'react-loader-spinner';


const BootstrapDialogs = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  
 function ProjectPopUp(props) {
      const history=useHistory();
      const {open,setOpen,opened,setOpened} =props;
      const [pageName,setPagename]=React.useState("");
      const [pageId,setPageId]=React.useState("");
      const [click,setClick]=React.useState(false)
      const project=props.project;
      const accessCode=props.accessCode;
      const token=props.token;
      const projectId=props.projectId;
      var formData=new FormData();
      console.log(pageId,"pgidddd")
      formData.append('data',JSON.stringify({
          'project':projectId,
          'pageName':pageName
      }))

      
    const handleClickOpen = () => {
        setOpen(true);
        setOpened(true);
        };
    const handleClose = () => {
        setOpen(false);
        };

    const handleCloses = () => {
        setOpened(false);
    };

    function postPage(){
      axios({
          method: "post",
          url: "http://44.195.32.62:1337/pages",
          data: formData,
          headers: { 
              "Content-Type": "multipart/form-data",
              "Authorization":"Bearer"+" "+token,
          },
        })
          .then(function (response) {
            console.log(response,"pageres")  
            console.log(response.data.id,"pgID");
            setPageId(response.data.id)
          })
          .catch(function (response) {
            console.log(response);
          });
  }

    function navigateAddPage(){
        history.push({
            pathname:'/addpage',
            state:{
                project:project,
                accessCode:accessCode,
                token:token,
                projectId:projectId,
                pageName:pageName,
                pageId:pageId
            }
        })
    }
    return (
      <div>
        <BootstrapDialogs
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}    
        >
          <DialogContent dividers style={{width:480,height:150,overflowX:'hidden',overflowY:"hidden"}}>
            <Typography gutterBottom>
            <div >
            <div container>
                <h1 className="pop-tx11">Enter Page Name</h1>
            </div>
            <div container>
                <input type="text" onChange={(e)=>setPagename(e.target.value)} value={pageName} className="pg-inp-nm"/>
            </div>
            <div className="btn-pop-cont">
                <button className="btn-cn"onClick={() => {setOpen(false)}} onClose={handleClose}> cancel</button>
                {pageId==""&&click==false?<button className="ad-btn" onClick={() => {postPage();setClick(true);}}>Create</button>:null}
                {pageId==""&&click==true?<button className="ad-btn" onClick={() => {postPage();setClick(true);}}>
                <Loader type="TailSpin"
                    color="#00BFFF"
                    height={30}
                    width={30}
                    />
                </button>:null}
                {pageId!==""?<button className="ad-btn" onClick={navigateAddPage}>Add</button>:null}
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
export default ProjectPopUp;