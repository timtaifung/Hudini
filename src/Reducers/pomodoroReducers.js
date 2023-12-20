import {
    INCREMENT_SECOND,
    DECREMENT_SECOND,
    INCREMENT_MINUTE,
    DECREMENT_MINUTE,
    INCREMENT_HOUR,
    DECREMENT_HOUR,
    RESET_COUNTER,
    SET_ALERT,
} from '../ActionTypes/actionTypes';

const initialState = {
    setHour: 0,
    setMinute: 0,
    setSecond: 0
}

const pomodoroReducer = (state =initialState,action) =>{
    switch(action.type){
        case INCREMENT_HOUR:
            return{
                ...state,
                setHour: state.setHour + 1
            }
        case DECREMENT_HOUR:
            return{
                ...state,
                setHour: state.setHour === 0 ? state.setHour=0 : state.setHour-1
            }
        case INCREMENT_MINUTE:
            return{
                ...state,
                setMinute: state.setMinute === 59 ? 0 : state.setMinute+1,
                setHour: state.setMinute === 59 ? state.setHour + 1 : state.setHour
            }
        case DECREMENT_MINUTE:
            return{
                ...state,
                setMinute: state.setMinute === 0 ? state.setMinute: state.setMinute-1,
            }
        case INCREMENT_SECOND:
            return{
                ...state,
                setSecond: state.setSecond ===59 ? 0 : state.setSecond+1,
                setMinute: state.setSecond === 59 ? state.setMinute + 1 : state.setMinute
            }
        case DECREMENT_SECOND:
            return{
                ...state,
                setSecond: state.setSecond === 0? state.setSecond : state.setSecond-1,
            }
        case RESET_COUNTER:
            return{
                ...state,
                setHour: 0,
                setMinute: 0,
                setSecond: 0
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