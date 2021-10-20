import React from "react";
import { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from 'react-router';
import {
    FormControl,
    Input,
    Grid,
  } from "@material-ui/core";
const useStyles=makeStyles((theme)=>({
    button:{
        fontFamily:"Proxima Nova",
        fontWeight:"600",
        color:"#ffffff",
        height:"44px",
        width:"360px",
        left:"540px",
        top:"630px",
        backgroundColor:"#FE7300",
        borderRadius:"6px",
        borderWidth:"0px",
        cursor:"pointer",
        marginTop:"15px"
    },
    para:{
        fontFamily:"Proxima Nova",
        fontWeight:"600",
        color:"#ffffff",
        cursor:"pointer",
    },
    input:{
        color:"#ffffff",
        width:"360px",
        height:"48px",
        borderRadius:"6px",
        backgroundColor:"transparent",
        borderColor:"#C0CCDA",
        borderWidth:"1px",
        borderStyle:"solid",
        boxSizing:"border-box"
    },
    heading:{
        color:"#ffffff",
        height:"44px",
        width:"245px",
        fontFamily:"Proxima Nova",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:"32px",
        marginLeft:"5rem",
        lineHeight:"44px"
    },
    paragraph:{
        color:"#ffffff",
        height:"72px",
        width:"448px",
        fontFamily:"Proxima Nova",
        fontWeight:"400",
        fontStyle:"normal",
        fontSize:"16px",
        marginLeft:"5rem",
        lineHeight:"24px"
    },
    label:{
        fontFamily:"Proxima Nova",
        fontWeight:"600",
        fontSize:"16px",
        fontStyle:"normal",
        lineHeight:"20px",
        color:"#ffffff"
    }

    
}))  
const ForgotPassword=()=>{
    const classes=useStyles()
    const history=useHistory()
    function navigateToLogin(){
        history.push("/")
    }
    return(
        <div style={{backgroundColor:"#0A3C6B",height:"100vh",marginTop:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Grid>
                <h1 className={classes.heading}>Forgot password</h1>
                <p className={classes.paragraph}>Forgot your password? No worries. Provide your login email address and we will send you a password reset link to your email address.</p>
            </Grid>
            
            <FormControl>     
                  <label 
                  htmlFor="email" 
                  className={classes.label}
                  >Email address</label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    className={classes.input}
                  />
                </FormControl>
                <Grid>
                    <button className={classes.button}>Send reset link</button>
                </Grid>
                <div onClick={navigateToLogin}>
                <p className={classes.para}>Back to Signin</p>
                </div>
        </div>
    )
}
export default ForgotPassword;