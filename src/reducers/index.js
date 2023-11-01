import todosReducer from "./todosReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    todo: todosReducer,

})

export default allReducers