import { makeStyles,  } from '@material-ui/core/styles';
import React, { useState } from 'react';
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
        cursor:"pointer"
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

function SignUp(props) {
  const history=useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const [email,setEmail]=useState();
  const [jwt1,setJwt1]=useState("");

  async function signUp(){
      let userDetails={email,username,password}
      console.log(userDetails)

      let result=await fetch('https://api-meta.eskoops.com/auth/local/register',{
         method:"POST",
         body:JSON.stringify(userDetails),
         headers:{
             "Content-Type":"application/json",
             "Accept":"application/json"
         }
      })
      result=await result.json()
      console.log(result,"pardhu")
      setJwt1(result)
      localStorage.setItem('user-info',JSON.stringify(result))
  }
  
  function navigateLogin(){
      history.push("/")
  }
  return (
    <div style={{backgroundColor:"#0A3C6B",height:"100vh",marginTop:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <div>    
      <label 
      htmlFor="username" 
      className={classes.headings}
      >Username</label>
      <Input
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className={classes.inpStyle}
      />
    </div>

    <div>    
      <label 
      htmlFor="email" 
      className={classes.headings}
      >Email address</label>
      <Input
        type="text"
        className={classes.inpStyle}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>

    <div> 
      <label htmlFor="password"
      className={classes.heading}
      >Password</label>
      <Input
        type="password"
        className={classes.inpStyle}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Grid style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
     </Grid>
    </div>

    <Grid>
    <button
    className={classes.button}
    onClick={signUp}
    >
    {jwt1 ==""?"Create an Account":"Account Created Successfully"}
    </button>
    </Grid>  
    <div onClick={navigateLogin} style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
    <h1 className={classes.para}>Back to SignIn</h1>
    </div>
</div>
  );
};
export default SignUp;
