import {
    INCREMENT_SECOND,
    DECREMENT_SECOND,
    INCREMENT_MINUTE,
    DECREMENT_MINUTE,
    INCREMENT_HOUR,
    DECREMENT_HOUR,
    RESET_COUNTER,
    SET_ALERT,
    SET_TOGGLE,
} from '../ActionTypes/actionTypes';

const initialState = {
    currentMode: 0, // 0: StudySet, 1: RestSet, 2: Actual
    setHour: 0,
    setMinute: 0,
    setSecond: 0,
    restHour: 0,
    restMinute: 0,
    restSecond: 0,
}

const pomodoroReducer = (state =initialState,action) =>{
    switch(action.type){
        case SET_TOGGLE:
            return{
                ...state,
                currentMode: state.currentMode === 0 ? 1 : 0,
            }
        case INCREMENT_HOUR:
            return{
                ...state,
                setHour: state.currentMode===0? state.setHour + 1: state.setHour,
                restHour: state.currentMode===1? state.restHour + 1: state.restHour
            }
        case DECREMENT_HOUR:
            return{
                ...state,
                setHour: state.currentMode===0? state.setHour === 0 ? state.setHour=0 : state.setHour-1 : state.setHour,
                restHour: state.currentMode===1? state.restHour === 0 ? state.restHour =0 : state.restHour-1 : state.restHour,
            }
        case INCREMENT_MINUTE:
            return{
                ...state,
                setMinute: state.currentMode===0? state.setMinute === 59 ? 0 : state.setMinute+1 : state.setMinute,
                setHour: state.currentMode===0? state.setMinute === 59 ? state.setHour + 1 : state.setHour : state.setHour,
                restMinute: state.currentMode === 1? state.restMinute === 59 ? 0 : state.restMinute + 1 : state.restMinute,
                restHour: state.currentMode === 1? state.restMinute === 59 ? state.restHour + 1 : state.restHour : state.restHour
            }
        case DECREMENT_MINUTE:
            return{
                ...state,
                setMinute: state.currentMode===0? state.setMinute === 0 ? state.setMinute: state.setMinute-1 : state.setMinute,
                restMinute: state.currentMode===1? state.restMinute === 0 ? state.restMinute : state.restMinute-1 : state.restMinute,

            }
        case INCREMENT_SECOND:
            return{
                ...state,
                setSecond: state.currentMode===0? state.setSecond ===59 ? 0 : state.setSecond+1 : state.setSecond,
                setMinute: state.currentMode===0? state.setSecond === 59 ? state.setMinute + 1 : state.setMinute : state.setMinute,
                restSecond: state.currentMode===1? state.restSecond ===59 ? 0 : state.restSecond+1 : state.restSecond,
                restMinute: state.currentMode===1? state.restSecond === 59 ? state.restMinute + 1 : state.restMinute : state.restMinute,
            }
        case DECREMENT_SECOND:
            return{
                ...state,
                setSecond: state.currentMode===0? state.setSecond === 0? state.setSecond : state.setSecond-1 : state.setSecond,
                restSecond: state.currentMode===1? state.restSecond === 0? state.restSecond : state.restSecond-1 : state.restSecond,
            }
        case RESET_COUNTER:
            return{
                ...state,
                setHour: state.currentMode===0? 0 : state.setHour,
                setMinute: state.currentMode===0? 0 : state.setMinute,
                setSecond: state.currentMode===0? 0 : state.setSecond,
                restHour: state.currentMode===1? 0 : state.restHour,
                restMinute: state.currentMode===1? 0 : state.restMinute,
                restSecond: state.currentMode===1? 0 : state.restSecond,

            }
        case SET_ALERT:
            return{
                ...state,
                alertMessage: action.payload
            }
        default:
            return state;
    }
}

export {pomodoroReducer};