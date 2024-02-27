import {combineReducers} from "redux";
import userInfoReducer from "./userInfoReducer";
import pageInfoReducer from "./pageInfoReducer";
const rootReducer = combineReducers({
    userInfo : userInfoReducer,
    pageInfo : pageInfoReducer
    // Add reducer
})
export default rootReducer;