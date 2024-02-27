import {Box, Typography, IconButton, Button} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import RegisterDataPath from "./RegisterDataPath";

function TaskDetail({userInfo, task, isOpen, handleClosePopup}) {
    const [popupOpen, setPopupopen] = useState(false);
    if(!isOpen) return null;
    const handleRegisterPopupOpen = () =>{
            setPopupopen(true);
        }
    const handleRegisterPopupClosed = () =>{
        setPopupopen(false);
    }
    return (
    <Box id="task_detail" style={{
                position:"fixed",
                top:"0",
                left:"0",
                width:"100%",
                height:"100%",
                backgroundColor:"rgba(0,0,0,0.3)",
                zIndex:"10",

        }}>
        <RegisterDataPath isOpen={popupOpen} handleRegisterPopupClosed={handleRegisterPopupClosed} userInfo={userInfo} task={task}/>
        <Box id="detail_content" style={{
                position:"fixed",
                top:"150px",
                left: "50%",
                transform: "translate(-50%, 0)",
                width:"680px",
                height:"700px",
                backgroundColor:"rgba(255,255,255)",
                zIndex:"1000",
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
                <IconButton aria-label="close" onClick={handleClosePopup}
                sx={{

                }}>
                        <CloseIcon />
                </IconButton>
            </Box>
            <Typography variant="h4">{task.taskName}</Typography>
            <Typography variant="h6" sx={{
                color:"gray"
            }}>{task.taskContractAddress}</Typography>
            <p><b>owner : </b>{task.userName}</p>
            <></>
            <Box id="contentAria" sx={{
                width :"100%",
                display:"flex",
                flexDirection : "column",
                alignItems:"center",
                justifyContent:"center",
                margin:"10px"
            }}>
            <Typography variant="h6"><b>TASK ID</b> : {task.taskId}</Typography>
            <Typography variant="h6"><b>PURPOSE</b> : {task.taskPurpose}</Typography>
            <Typography variant="h6"><b>FRAMEWORK</b> : {task.taskFramework}</Typography>
            <Typography variant="h6"><b>MAX NUMBER OF TRAINER</b> : {task.taskMaxTrainer}</Typography>
            <Typography variant="h6"><b>REQUIRED DATA TYPE</b> : {task.taskDataType}</Typography>
            <Box>
                {userInfo.type ==="T" ? <Button sx={{
                    color:"purple"
                }} onClick = {handleRegisterPopupOpen}>Participate</Button> : null }
                <Button sx={{
                color:"purple"
            }} onClick={handleClosePopup}>Close</Button>
            </Box>

            </Box>
        </Box>
        </Box>

  );
}
export default TaskDetail;