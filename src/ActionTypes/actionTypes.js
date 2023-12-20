export const INCREMENT_SECOND = 'INCREMENT_SECOND';
export const DECREMENT_SECOND = 'DECREMENT_SECOND';
export const INCREMENT_MINUTE = 'INCREMENT_MINUTE';
export const DECREMENT_MINUTE = 'DECREMENT_MINUTE';
export const INCREMENT_HOUR = 'INCREMENT_HOUR';
export const DECREMENT_HOUR = 'DECREMENT_HOUR';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SET_ALERT = 'SET_ALERT';
export const SET_TOGGLE = 'SET_TOGGLE';
export const START_TIMER ='START_TIMER';

export const incrementSecond = () => ({ type: INCREMENT_SECOND });
export const decrementSecond = () => ({ type: DECREMENT_SECOND });
export const incrementMinute = () => ({ type: INCREMENT_MINUTE });
export const decrementMinute = () => ({ type: DECREMENT_MINUTE });
export const incrementHour = () => ({ type: INCREMENT_HOUR });
export const decrementHour = () => ({ type: DECREMENT_HOUR });
export const resetCounter = () => ({ type: RESET_COUNTER });
export const setToggle = () => ({ type: SET_TOGGLE });
export const startTimer = () => ({ type: START_TIMER });



