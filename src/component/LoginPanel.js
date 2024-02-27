import {Box,Button} from "@mui/material";
import LOGIN from "../images/login_modal.png";
import METAMASK from "../images/MetaMask.png";
import BUTTON from "../images/Button.png"
import {useNavigate} from "react-router-dom";

function LoginPanel() {
    const navigate = useNavigate();
  return (
    <Box id="login" style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:"300px",
                height:"450px",
                backgroundImage : `url(${LOGIN})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
        }}>
        <Box id="innerLogin" style={{
            backgroundImage:`url(${METAMASK})`,
            width:"30%",
            height:"20%",
            backgroundSize:"100% 100%",

        }}/>
        <Button id="Connect wallet" onClick = {()=>{
            navigate('/main')
        }} sx={{
            backgroundImage:`url(${BUTTON})`,
            backgroundRepeat:"no-repeat",
            width:"80%",
            height:"10%",
            backgroundSize:"100% 100%",
            color:"black"
        }}>Login with metamask</Button>
        <Button id="Connect wallet" onClick = {()=>{
            navigate('/signup')
        }} sx={{
            backgroundImage:`url(${BUTTON})`,
            backgroundRepeat:"no-repeat",
            width:"80%",
            height:"10%",
            backgroundSize:"100% 100%",
            color:"black"
        }}>SIGN-UP</Button>
        </Box>
  );
}
export default LoginPanel;