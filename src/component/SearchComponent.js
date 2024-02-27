import {Box,Pagination, List, ListItemText, ListItemButton, Divider, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import TaskDetail from "./TaskDetail";

function SearchComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectPageInfo = state => state.pageInfo;
    const selectUserInfo = state => state.userInfo;
    const userInfo = useSelector(selectUserInfo);
    const itemInfo = useSelector(selectPageInfo);
    const [popupOpen, setpopupOpen] = useState(false);
    const [page,setPage] = useState(1);

    const handleOpenPopup = (task,e) =>{
        dispatch({type:"SET_ITEM",payload:task})
        setpopupOpen(true);
    }
    const handleClosePopup = () =>{
        setpopupOpen(false)
    }

    useEffect( ()=>{
        dispatch({type:"SET_SEARCH",payload:""}); // for all item dispatch
        getMyTaskItems();
    },[]);
    useEffect( ()=>{
        // console.log("item list changed")
    },[itemInfo.items]);

    const getMyTaskItems = async () =>{
        const resultArr = await axios.get("http://localhost:3000/flower/task");
        if(resultArr.data.data !== null ){
            // set redux state
            dispatch({type:"SET_ITEMS",payload:resultArr.data.data})
        }else{
           console.log("No data")
        }
    }

    const styles = {
  listContainer: {
    width: '100%',
    bgcolor: 'rgba(255, 255, 255, 0.3)',
  },
  // 추가적인 스타일은 여기에 작성하세요.
};
  return (
    <Box id="login" style={{
                display:"flex",
                marginTop:"10px",
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"center",
                width:"100%",
                height:"95%",
                // backgroundColor:"gray"

        }}>
        <TaskDetail userInfo = {userInfo} task={itemInfo.item} isOpen={popupOpen} handleClosePopup={handleClosePopup}></TaskDetail>
        {/*<ListItemText primary="hihi" />*/}
        <List sx={styles.listContainer}>

            <Box sx={{
                display:"flex",
                justifyContent:"space-around",
                color:"gray"
            }}>
                <Typography>Number</Typography>
                <Typography>Name</Typography>
                <Typography>Framework</Typography>
                <Typography>Owner</Typography>
            </Box>
            <Divider />

            {
                itemInfo.items.map((elem)=>{
                    return (elem.taskStatusCode === 1 ?
                     (
                        <ListItemButton onClick={(e)=>{handleOpenPopup(elem,e)}}>
                            <ListItemText primary={elem.taskId} />
                            <ListItemText primary={elem.taskName}/>
                            <ListItemText primary={elem.taskFramework} />
                            <ListItemText primary={elem.organizationUserId} />
                        </ListItemButton>

                            ) : null)
                })
            }
        </List>
        <Pagination count={1} size="small"/>
        </Box>
        
  );
}
export default SearchComponent;