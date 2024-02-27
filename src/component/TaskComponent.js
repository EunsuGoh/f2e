import {Box, List, ListItemText, ListItemButton, Divider, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import TaskDetail from "./TaskDetail";

function TaskComponent() {
    const [myItems, setMyitems] = useState([]);
    const [popupOpen, setpopupOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectItemInfo = state=> state.pageInfo;
    const selectUserInfo = state=> state.userInfo;
    const userInfo = useSelector(selectUserInfo);
    const itemInfo = useSelector(selectItemInfo);

    useEffect( ()=>{
        getMyTaskItems();
        // console.log(userInfo.name)
    },[]);
    const handleOpenPopup = (task,e) =>{
        dispatch({type:"SET_ITEM",payload:task})
        setpopupOpen(true);
    }
    const handleClosePopup = ()=>{
        setpopupOpen(false);
    }
    const getMyTaskItems = async () =>{
        const resultArr = await axios.get("http://localhost:3000/flower/task");
        console.log(resultArr.data.data)
        // userType organization/Trainer conditional rendering
        const myItems = resultArr.data.data.filter((elem) => elem.userName === userInfo.name ? true : false);
        setMyitems(myItems);
    }

    const getItemDetail = () =>{
        // TODO : Item detail page modal
    }
    const styles = {
  listContainer: {
    width: '100%',
    bgcolor: 'rgba(255, 255, 255, 0.3)',
  },
};

  return (
    <Box id="login" style={{
                display:"flex",
                marginTop:"10px",
                flexDirection:"column",
                // justifyContent:"center",
                alignItems:"center",
                width:"100%",
                height:"95%",

        }}>
         <TaskDetail userInfo={userInfo} task={itemInfo.item} isOpen={popupOpen} handleClosePopup={handleClosePopup}/>
         <List sx={styles.listContainer}>
         <Box sx={{
                display:"flex",
                justifyContent:"space-around",
                color:"gray"
            }}>
                <Typography>Task list</Typography>
              
            </Box>
            <Divider />
             {myItems.length >= 0 ?
                 (myItems.map((elem)=>{
                     return <ListItemButton onClick={(e)=>{handleOpenPopup(elem,e)}}>
                         <ListItemText>{elem.taskName}</ListItemText>
                     </ListItemButton>
                 }))
                 :  null }
          </List>
    </Box>
  );
}
export default TaskComponent;