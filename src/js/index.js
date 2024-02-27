  // src/js/store/index.js
  import { createStore } from "redux";
  import rootReducer from "./reducers/index";

  // first argument :  root reducer
  // second argument : preloaded state(undefined)
  // third argument : enhancer
  const store = createStore(rootReducer);

  export default store;