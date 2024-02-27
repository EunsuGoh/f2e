import {Box, Typography}from "@mui/material"
import BGIMG from "../images/login_bgimg.png"
import LoginPanel from "../component/LoginPanel";


function Login() {

  return (
    <Box id="bgimg"
         style={{
                display:"flex",
                flexDirection:"column",
                backgroundImage :`url(${BGIMG})`,
                width:"100vw",
                height:"100vh",
                backgroundRepeat:"no-repeat",
                justifyContent:"center",
                alignItems:"center",
                backgroundSize:"100% 60%",
                backgroundPosition:"bottom"
                }}
         >
        <Typography variant="h4">Welcome, User</Typography>
        <LoginPanel/>
    </Box>
  );
}

export default Login;
