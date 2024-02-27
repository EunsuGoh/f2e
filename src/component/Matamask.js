import {useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {Web3} from "web3";
import {useDispatch} from "react-redux";
import axios from "axios";
import{useNavigate} from "react-router-dom";

function Metamask() {
    const [accounts, setAccounts] = useState([]);
    const [connected, setConnected] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(()=>{
        checkMetamaskConnection();
    },[]);
    const dispatchUserInformation = async (userAddr) => {
        dispatch({type: "SET_ADDRESS", payload: userAddr});
        const userInfoObj = await axios.get(`http://localhost:3000/flower/user?userAddress=${userAddr}`);
        // TODO : 분기점 생성 : 회원정보 없을 경우
        if (userInfoObj.data.result.message === "user not found") {
            window.alert("Not exist on user list. Redirect to Signup page")
            navigate("/signup")
        } else {
            dispatch({type: "SET_NAME", payload: userInfoObj.data.data.userName});
            dispatch({type: "SET_TYPE", payload: userInfoObj.data.data.userType});
            dispatch({type: "SET_ID", payload: userInfoObj.data.data.userId});
        }
    }
    const checkMetamaskConnection = async ()=>{
        if(window.ethereum){
            try{
                await window.ethereum.enable();
                setConnected(true);
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                setAccounts(accounts);
                // console.log(accounts)
                await dispatchUserInformation(accounts[0]);
            }
            catch(e){
                console.error('Error connecting to Metamask:', e);

            }
        }else{
            console.warn('Metamask not found. Please install Metamask.');
        }
    }

    return(
       <div calssName="matamask">
           {connected?(
               <div style={{ color :"gray"}}>
              Connected with metamask!
          </div>
           ):(<div>Please Connect to Metamask.</div>)}

        </div>
  );
}

export default Metamask;
