import {Box, IconButton,Button, Typography, TextField} from "@mui/material";
import LOGIN from "../images/login_modal.png";
import METAMASK from "../images/MetaMask.png";
import BUTTON from "../images/Button.png"
import EXIT from "../images/exit.png"
import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

function SignupPanel() {
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [address,setAddress] = useState("");
    const [passwd,setPasswd] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const navigate = useNavigate();

    const sendUserInfoToServer = async () =>{
        const signupResult = await axios.post("http://localhost:3000/flower/user/join",{
            "userName": name,
            "userType": type,
            "userAddress": address,
            "userSign":passwd,
            "userEmail":email,
            "userPhone":phone
        })
        console.log(signupResult.data.result);
        if(signupResult.data.result.message == "success"){
            navigate("/main");
        }else{
            window.alert("please try again");
        }
    }



    const handleInfo = (e) =>{
        let funcName = 'set' + e.target.id;
        // console.log(funcName)
        eval(funcName+"(e.target.value)");
    }

    useEffect(()=>{
        // console.log(`name : ${name}`);
        // console.log(`type : ${type}`);
        // console.log(`address : ${address}`);
        // console.log(`passwd : ${passwd}`);
        // console.log(`email : ${email}`);
        // console.log(`phone : ${phone}`);
    },[name,type,address,passwd,email,phone]);
  return (
    <Box id="signup" style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                alignItems:"center",
                width:"500px",
                height:"600px",
                backgroundColor:"white",
                borderRadius : "10px",
                boxShadow:"5px 5px 5px 5px gray"
        }}>
        <Box id="exiticon" sx={{
            width:"20px",
            alignSelf:"end",
            height:"20px",
            marginRight:"30px"
        }}>
            <IconButton id="ExitButton" onClick={()=>{
                navigate("/");
            }}
            sx={{
                borderRadius:"100%",
                color:"black",
                backgroundImage:`url(${EXIT})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%"
            }}/>
        </Box>
        <Box id="signupTypo" sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start"
        }}>
            <Typography variant="h4" sx={{color:"darkgray"}}>Welcome to BCFL</Typography>
            <Typography variant="h6">Please register your information</Typography>
        </Box>
        <Box id="signupInput" sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly",
            height:"60%"
        }}>
            <TextField  label="Name" id="Name" sx={{
                backgroundColor:"lightgray",
                width:"300px",

            }} onChange={handleInfo}/>
            <TextField  label="userType"  id="Type" sx={{
                backgroundColor:"lightgray",
                width:"300px",

            }} onChange={handleInfo}/>
            <TextField  label="Wallet Address" id="Address" sx={{
                backgroundColor:"lightgray",
                width:"300px",

            }} onChange={handleInfo}/>
            <TextField  label="Password" id="Passwd" type="password" sx={{
                backgroundColor:"lightgray",
                width:"300px",

            }} onChange={handleInfo}/>
            <TextField  label="E-mail" id="Email"sx={{
                backgroundColor:"lightgray",
                width:"300px",

            }} onChange={handleInfo}/>
            <TextField  label="Phone number" id="Phone"sx={{
                backgroundColor:"lightgray",
                width:"300px",

            }} onChange={handleInfo}/>
        </Box>
        <Box id="signbutton">
            <Button sx={{
                backgroundImage:`url(${BUTTON})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                color:"black",
                width:"150px"
            }} onClick={sendUserInfoToServer}>submit</Button>
        </Box>
    </Box>
  );
}
export default SignupPanel;