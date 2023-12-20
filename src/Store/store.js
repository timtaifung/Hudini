import {pomodoroReducer} from "../Reducers/pomodoroReducers";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    pomodoro: pomodoroReducer
});

const store = configureStore({
    reducer: rootReducer
})
export default store;