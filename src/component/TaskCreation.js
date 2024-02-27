import {Box, Typography, TextField, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
function TaskCreation() {
    const navigate = useNavigate();
    const seletcuserInfo = state => state.userInfo;
    const userInfo = useSelector(seletcuserInfo)

    const[name, setName] = useState("");
    const[purpose, setPurpose] = useState("");
    const[framework, setFramework] = useState("");
    const[datatype, setDatatype] = useState("");
    const[maxnumoftrainer, setMaxnumoftrainer] = useState("");

    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handlePurpose = (e) =>{
        setPurpose(e.target.value);
    }
    const handleFramework = (e) =>{
        setFramework(e.target.value);
    }
    const handleDatatype = (e) =>{
        setDatatype(e.target.value);
    }
    const handleMaxnum = (e) =>{
        setMaxnumoftrainer(e.target.value);
    }
    useEffect(() => {
        console.log(" ")
    }, [name, purpose, framework, datatype, maxnumoftrainer]);

    const sendCreationInfoToServer = async () =>{
        if(name.length === 0 || purpose.length === 0 || framework.length === 0 || datatype.length === 0|| maxnumoftrainer.length === 0){
        window.alert("Please fill all field.")
        }
        else{
            try{
                const result = await axios.post(`http://localhost:3000/flower/task`, {
                    "taskName": name,
                    "taskPurpose": purpose,
                    "taskFramework": framework,
                    "taskDataType": datatype,
                    "taskMaxTrainer": parseInt(maxnumoftrainer),
                    "userId": parseInt(userInfo.id)
                })
                window.alert("Task generation success")
            }catch (e){
             window.alert(e)
            }
        }

    }
    return (
    <Box id="task_creation" style={{
                display:"flex",
                marginTop:"10px",
                flexDirection:"column",
                // justifyContent:"center",
                alignItems:"center",
                width:"100%",
                height:"95%",
                // backgroundColor:"gray"
        }}>


        <Typography variant="h4">BCFL Task Generation</Typography>
        <Typography variant='h6' sx={{
            textAlign:"left"
        }}>Please enter the information to create a BCFL task. All fields are information provided to the Trainer and must be filled out.
        </Typography>
        <Box id="form" sx={{
            width : "100%",
            height:"50%",
            margin:"10%",
            display:"flex",
            flexDirection :"column",
            alignItems:"center",
            justifyContent:"space-around",
        }}>
        <TextField  label="Task name" onChange={handleName} id="tasknName"sx={{
                backgroundColor:"rgba(255, 255, 255, 0.3)",
                width:"80%",
            }}/>
            <TextField  label="Task purpose" onChange={handlePurpose} id="taskPurpose"sx={{
                backgroundColor:"rgba(255, 255, 255, 0.3)",
                width:"80%",
            }}/>
            <TextField  label="Framework" onChange={handleFramework} id="taskFramework"sx={{
                backgroundColor:"rgba(255, 255, 255, 0.3)",
                width:"80%",
            }}/>
            <TextField  label="Data type" onChange={handleDatatype} id="taskDatatype"sx={{
                backgroundColor:"rgba(255, 255, 255, 0.3)",
                width:"80%",
            }}/>
            <TextField  label="Max number of Trainer" onChange={handleMaxnum} id="taskMaxTrainer"sx={{
                backgroundColor:"rgba(255, 255, 255, 0.3)",
                width:"80%",
            }}/>
            </Box>
        <Button sx={{
            color:"purple",
            width:"200px"
        }} onClick={sendCreationInfoToServer}>Create</Button>
    </Box>
  );
}
export default TaskCreation;