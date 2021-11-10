import { makeStyles,  } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import Spinner from '../Components/Spinner';
import Loader from 'react-loader-spinner';
import logo from "../Assets/Images/logo.png";
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
    },
    invtxt:{
      fontFamily:"Proxima Nova",
      fontWeight:"600",
      fontSize:"16px",
      fontStyle:"normal",
      lineHeight:"20px",
      color:"red"
    }
    
}));

function Login(){
  const classes = useStyles();
  let history=useHistory();
  function navigateToForPass(){
    history.push("/forgotpassword")
  }
  function navigateRegister(){
    history.push("/signUp")
  }

  const theme = useTheme();
  const [identifier,setIdentifier]=useState();
  const [password,setPassword]=useState();
  const [islogin,setIslogin]=useState(false);
  const [jwt,setJwt]=useState("");
  const [click,setClick]=useState(false);
  const [loader,setLoader]=useState(false);
  const [errorMsg,SetErrMsg]=useState("")

  async function signUp(){
      let userDetails={identifier,password}
      console.log(userDetails)
      setClick(true)
      setLoader(true)
      if (loader==false){
        SetErrMsg("*Invalid Username or Password")
      }
      let result=await fetch('http://18.222.221.0:1337/auth/local',{
         method:"POST",
         body:JSON.stringify(userDetails),
         headers:{
             "Content-Type":"application/json"
         }
      })
      result=await result.json()
      if (result.jwt !== undefined){
        setJwt(result.jwt)
        console.log(result)
        setIslogin(true)
        setLoader(false)
        console.log(loader)
        history.push({
          pathname:'/home',
          state:{
              token:result.jwt,
          }
      }) 
      }
      localStorage.setItem('login',JSON.stringify(result))
  }
  console.log(islogin)
  return (
    <div style={{backgroundColor:"#0A3C6B",height:"100vh",marginTop:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <div style={{height:"100px",width:"150px",marginBottom:"25px",marginRight:"35px"}}>
      <img src={logo} style={{height:"100%",width:"100%"}}/>
    </div>  
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
    style={{display:"flex",justifyContent:"center",alignItems:"center"}}
    >
    {loader == false && jwt == "" && click==false ?<p>Login</p>:
    <Loader type="TailSpin"
        color="#00BFFF"
        height={30}
        width={30}
        />}
    </button>
    {jwt == "" && click==true ?<p className={classes.invtxt}>{errorMsg}</p>:null}
    <div  style={{display:"flex",flexFlow:"row",justifyContent:"center"}} onClick={navigateRegister}>
    <h1 className={classes.para}>Create an Account</h1>
    </div>
    </Grid>     
</div>
  );
};
export default Login;
