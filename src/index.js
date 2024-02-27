import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./js/index"
import {Provider} from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// redux
// const enhancer = process.env.NODE_ENV === "production" ?
//     compose(applyMiddleware()) :
//     composeWithDevTools(applyMiddleware(logger));
// const store = createStore(rootReducer,enhancer);
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<Provider store={createStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>*/}
    <App />
      {/*</Provider>*/}
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
