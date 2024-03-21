import { createStoreHook } from "react-redux";
import reducer from "./reducer";
import { createStore } from "redux";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const taskStore = createStore(reducer, devtools);

export default taskStore;
