import { combineReducers } from "redux"
import todoReducer from './todoReducer'
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    todoItems: todoReducer,
    userDetails: userReducer
});
export default rootReducer;