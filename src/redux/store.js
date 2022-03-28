import { createStore, combineReducers} from "redux";
import UsersReducer from "./userReducer";

let reducers = combineReducers({
    userPage: UsersReducer
})

let store = createStore(reducers)
window.store = store
export default store