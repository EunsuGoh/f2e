import {SET_PAGE, SET_ITEMS, SET_SEARCH,SET_ITEM} from "../constants/action_types";

const pageInfoState = {
    page:"",
    items:[],
    search:"",
    item:{}
}

const pageInfoReducer = (state=pageInfoState, action) => {
    switch (action.type){
        case SET_PAGE:
            // action.payload를 추가(원래 배열을 유지하는 spread 연산자로 추가)
            // return {...state, articles:[...state.aiticles, action.payload]};
            return {...state,page:action.payload}
        case SET_ITEMS:
            // action.payload를 추가(원래 배열을 유지하는 spread 연산자로 추가)
            // return {...state, articles:[...state.aiticles, action.payload]};
            return {...state,items:action.payload}
        case SET_SEARCH:
            return {...state,search:action.payload}
        case SET_ITEM:
            return {...state,item:action.payload}
        default:
            return state;
    }
};
export default pageInfoReducer;