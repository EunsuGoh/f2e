import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector, useDispatch} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "200px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const selectUserInfo = state => state.userInfo
  const selectPageInfo = state => state.pageInfo
  const userInfo = useSelector(selectUserInfo)
  const pageInfo = useSelector(selectPageInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getMyTaskItems = async () =>{
        const resultArr = await axios.get("http://35.220.206.239:3000/flower/task");
        if(resultArr.data.data !== null ){
            // set redux state
            dispatch({type:"SET_ITEMS",payload:resultArr.data.data})
        }else{
           console.log("No data")
        }
    }
  const handleSearch = async (e) =>{
    if(e.key === "Enter"){
      const search = e.target.value
      dispatch({type:"SET_SEARCH", payload:search});
      if(search.length === 0){
        // Search word not exist
        dispatch({type:"SET_SEARCH",payload:""}); // for all item dispatch
        await getMyTaskItems();
      }else{
        // Search word exist
        const items = await axios.get("http://localhost:3000/flower/task")
        const itemArr = items.data.data
        let newItemArr = itemArr.filter((elem)=>{
        // 객체의 모든 value에 하나라도 포함돼잇으면 true
        return Object.values(elem).some((value) => {
          let regex = new RegExp(search.toLowerCase())
          return typeof value === 'string' && regex.test(value.toLowerCase());
        })
      })
      dispatch({type:"SET_ITEMS",payload:newItemArr});
      }
    }
  }

  return (
    <Box id="appbar" sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      width:"80%",
      maxWidth:"800px"
    }}>
      <Box sx={{
        margin:"10px",
        width:"100%",
        height:"50px",
        borderRadius:"200px",
        display:"flex",
        justifyContent:"space-around",
        backgroundColor:"rgba(255, 255, 255, 0.2) ",
        color:"black",
        alightItems:"center",
        boxShadow:"1px 5px 25px 0px rgba(0, 0, 0, 0.4) ",
        maxWidth:"800px"
        // margin:"30px",
      }}>
        <Toolbar sx={{
          alignSelf:"center",
          maxWidth:"800px"
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2}}

          >
            <HomeIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=> navigate("/market")}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BCFL {userInfo.type === "E"? "organization":"trainer"} page
          </Typography>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={handleSearch}
            />
          </Search>
        </Toolbar>
      </Box>
    </Box>
  );
}
