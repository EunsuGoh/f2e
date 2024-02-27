import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"
import Market from "./pages/market";
import Detail from "./pages/detail";
import Mypage from "./pages/mypage";
import store from "./js/index"
import {setAddress} from "./js/actions";

window.store = store;
window.setAddress = setAddress();
function App() {
  return (
    <div id="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/main" element={<Main/>}></Route>
                <Route path="/market" element={<Market/>}></Route>
                <Route path="/detail/:tokenid/:account" element={<Detail/>}></Route>
                <Route path="/mypage/:account" element={<Mypage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
