import { makeStyles,  } from '@material-ui/core/styles';
import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import {
    Input,
    Grid,
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    inpStyle:{
        color:"#ffffff",
        width:"360px",
        height:"48px",
        borderRadius:"6px",
        backgroundColor:"transparent",
        borderColor:"#C0CCDA",
        borderWidth:"1px",
        borderStyle:"solid",
        boxSizing:"border-box",
        marginBottom:"15px"
    },
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
        fontSize:"20px"
    },
    para:{
        fontFamily:"Proxima Nova",
        fontStyle:"normal",
        fontWeight:"600",
        fontSize:"16px",
        lineHeight:"20px",
        textDecorationLine:"underline",
        color: "#FFFFFF",
        cursor:"pointer" 
    },
    headings:{
        fontFamily:"Proxima Nova",
        fontWeight:"600",
        fontSize:"16px",
        fontStyle:"normal",
        lineHeight:"20px",
        color:"#ffffff",
        display:"flex",
        alignSelf:"flex-start"
    },
    heading:{
        fontFamily:"Proxima Nova",
        fontWeight:"600",
        fontSize:"16px",
        fontStyle:"normal",
        lineHeight:"20px",
        color:"#ffffff",
        display:"flex",
        alignSelf:"flex-start",
        marginTop:"10px"
    }
    
}));

function Login(){
  const classes = useStyles();
  let history=useHistory();
  function navigateToForPass(){
    history.push("/forgotpassword")
  }
  const theme = useTheme();
  const [identifier,setIdentifier]=useState();
  const [password,setPassword]=useState();
  const [islogin,setIslogin]=useState(false)
  
  async function signUp(){
      let userDetails={identifier,password}
      console.log(userDetails)

      let result=await fetch('http://18.222.221.0:1337/auth/local',{
         method:"POST",
         body:JSON.stringify(userDetails),
         headers:{
             "Content-Type":"application/json"
         }
      })
      result=await result.json()
      if (result.jwt !== undefined){
        setIslogin(true)
        history.push("/home")
      }
      localStorage.setItem('login',JSON.stringify(result))
  }
  console.log(islogin)
  return (
    <div style={{backgroundColor:"#0A3C6B",height:"100vh",marginTop:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <div>    
      <label 
      htmlFor="email" 
      className={classes.headings}
      >Email address</label>
      <Input
        type="text"
        className={classes.inpStyle}
        value={identifier}
        autocomplete="nope"
        onChange={(e)=>setIdentifier(e.target.value)}
      />
    </div>

    <div> 
      <label htmlFor="password"
      className={classes.heading}
      >Password</label>
      <Input
        type="password"
        autocomplete="new-password"
        className={classes.inpStyle}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}} onClick={navigateToForPass}>
      <p className={classes.para}>Forgot Password?</p>
     </div>
    </div>

    <Grid>
    <button
    className={classes.button}
    onClick={signUp}
    >
    Login
    </button>
    </Grid>  
    
</div>
  );
};
export default Login;
