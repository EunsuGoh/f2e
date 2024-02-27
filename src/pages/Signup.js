import {Box, Typography}from "@mui/material"
import SIGNUPBG from "../images/signup_bg.png"
import SIgnupPanel from "../component/SIgnupPanel";
import {useNavigate} from "react-router-dom";

function Signup() {
  return (
    <Box id="SignupBg"
         style={{
                display:"flex",
                flexDirection:"column",
                backgroundImage :`url(${SIGNUPBG})`,
                width:"100vw",
                height:"100vh",
                backgroundRepeat:"no-repeat",
                justifyContent:"center",
                alignItems:"center",
                backgroundSize:"100% 60%",
                backgroundPosition:"bottom"
                }}
         >
        <SIgnupPanel/>
    </Box>
  );
}

export default Signup;
