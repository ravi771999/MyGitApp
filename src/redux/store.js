import { createStore } from "redux";
import userReducer from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension"

const store=createStore(userReducer, composeWithDevTools());

export default store;