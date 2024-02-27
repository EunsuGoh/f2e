import {Box, Typography,Divider}from "@mui/material"
import BGIMG from "../images/main_bgimg.png"
import Metamask from "../component/Matamask";
import {useSelector} from "react-redux";
import SearchAppBar from "../component/Appbar";
import Pagination from "../component/Pagination";
import {useEffect} from "react";

function Main() {
    const selectUserInfo = state => state.userInfo
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
                backgroundSize:"200% 200%",
                backgroundPosition:"center",

                }}>
        <Metamask/>
        {/*<Box sx={{*/}
        {/*    display:"flex",*/}
        {/*    flexDirection:"column",*/}
        {/*    alignItems:"center",*/}
        {/*    justifyContent:"center"*/}
        {/*}}>*/}
            <SearchAppBar/>
            <Pagination/>
        {/*</Box>*/}

        {/*<Box id="infoTab" sx={{*/}
        {/*    display:"flex",*/}
        {/*    justifyContent:"space-between",*/}
        {/*    width:"95%",*/}
        {/*    alignItems:"center"*/}
        {/*}}>*/}
        {/*    <Typography variant="h4">Welcome, {userInfo.name}</Typography>*/}
        {/*    <Typography variant="h6" sx={{*/}
        {/*        color:userInfo.type==="T"?"black":"gray"*/}
        {/*    }}>participant</Typography>*/}
        {/*    <Typography variant="h6" sx={{*/}
        {/*        color:userInfo.type==="E"?"black":"gray"*/}
        {/*    }}>organization</Typography>*/}
        {/*    <Metamask/>*/}
        {/*</Box>*/}
    </Box>
  );
}

export default Main;
