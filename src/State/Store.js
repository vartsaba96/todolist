import {combineReducers, createStore} from "redux";
import tasksReducer from "./StartPageReducer";

let reducers = combineReducers({

    startPage: tasksReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;