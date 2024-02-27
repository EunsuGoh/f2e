import {Box,Button,Tabs,Tab,Typography} from "@mui/material";
import LOGIN from "../images/login_modal.png";
import METAMASK from "../images/MetaMask.png";
import BUTTON from "../images/Button.png"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TaskComponent from "./TaskComponent";
import SearchComponent from "./SearchComponent";
import TaskCreation from "./TaskCreation";

function Pagination() {
    // TODO : Pagination구현
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectPageInfo = state => state.pageInfo;
    const seleectUserInfo = state => state.userInfo;
    const pageInfo = useSelector(selectPageInfo);
    const userInfo = useSelector(seleectUserInfo);

    const [value, setValue] = useState('task');

    const getPage = () =>{
         switch(pageInfo.page){
                case "task":
                    return <TaskComponent/>
                case "search":
                    return <SearchComponent/>
                case "gen":
                    return <TaskCreation/>
                default:
                    return null
            }
    }
    const handleChange = (e,newPage) =>{
        setValue(newPage);
        dispatch({type:"SET_PAGE",payload:newPage});
    }
  return (
    <Box id="pagination" style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:"80%",
                height:"80%",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                backgroundColor:"rgba(255, 255, 255, 0.2) ",
                color:"black",
                borderRadius:"35px",
                boxShadow:"1px 5px 25px 0px rgba(0, 0, 0, 0.4) ",
                maxWidth:"800px"
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="task" label="My Task" />
                <Tab value="search" label="Search" />
                {userInfo.type === "E"?<Tab value="gen" label="create task" />:null}
            </Tabs>
        <Box id="component" sx={{
            width:"90%",
            height:"90%"
        }}>
        {getPage()}
        </Box>

        </Box>
  );
}
export default Pagination;