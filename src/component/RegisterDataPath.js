import {Box, Typography, IconButton, Button} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {useState} from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function RegisterDataPath({isOpen, handleRegisterPopupClosed, userInfo, task}) {
    const [filePath, setFilepath] = useState("")
    if(!isOpen) return null;
    const handleDatapath = (e) => {
        const files = e.target.files;
        const file = files["0"].webkitRelativePath
        setFilepath(file);

    }

    const sendParticipateTotheServer = async () =>{
        const data = {
                "taskId":task.taskId,
                "userId":userInfo.id,
                "dataPath":filePath
        }
        // console.log(data)
        const result = await axios.post(`http://localhost:3000/flower/task/participate`,data);

    }


    return (
    <Box id="register_data_path" style={{
                position:"fixed",
                top:"0",
                left:"0",
                width:"100%",
                height:"100%",
                backgroundColor:"rgba(0,0,0,0.3)",
                zIndex:"2000",

        }}>
        <Box id="detail_content" style={{
                position:"fixed",
                top:"300px",
                left: "50%",
                transform: "translate(-50%, 0)",
                width:"300px",
                height:"200px",
                backgroundColor:"rgba(255,255,255)",
                zIndex:"3000",
                borderRadius:"50px",
                display :"flex",
                flexDirection:"column",
                boxShadow:"1px 5px 25px 15px rgba(0, 0, 0, 0.4)",
                padding:"30px"
        }}>
            <Box sx={{
                display:"flex",
                width:"100%",
                justifyContent:"flex-end"

            }}
            >
                <IconButton aria-label="close" onClick={handleRegisterPopupClosed}
                sx={{

                }}>
                        <CloseIcon />
                </IconButton>

            </Box>
            <Box id="register_content_aria" sx={{
                display : "flex",
                alignItems:"center",
            }}>
                <DriveFolderUploadIcon sx={{
                    fontSize:"100px",
                    margin:"5px"
                }}/>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column"
                }}>
                <Typography variant="h6">Register data path</Typography>
                <input type="file" webkitdirectory="true" directory="true" onChange={handleDatapath}/>
                    {filePath.length !== 0?<p>{filePath}</p>:null }
                </Box>
                </Box>
     <Button sx={{
         color:"purple"
     }} onClick = {sendParticipateTotheServer}>UPLOAD</Button>
        </Box>
        </Box>

  );
}
export default RegisterDataPath;