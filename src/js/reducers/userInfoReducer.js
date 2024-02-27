import {SET_ADDRESS,SET_NAME,SET_TYPE,SET_ID} from "../constants/action_types";

const userInfoState = {
    address:"",
    name:"",
    type:"",
    id:""
}

const userInfoReducer = (state=userInfoState, action) => {
    switch (action.type){
        case SET_ADDRESS:
            // action.payload를 추가(원래 배열을 유지하는 spread 연산자로 추가)
            // return {...state, articles:[...state.aiticles, action.payload]};
            return {...state,address:action.payload}
        case SET_NAME:
            return {...state,name:action.payload}
        case SET_TYPE:
            return {...state,type:action.payload}
        case SET_ID:
            return {...state,id:action.payload}
        default:
            return state;
    }
};
export default userInfoReducer;