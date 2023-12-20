import {useSelector,useDispatch} from "react-redux";
import {
    decrementHour,
    decrementMinute, decrementSecond,
    incrementHour,
    incrementMinute,
    incrementSecond
} from "../../ActionTypes/actionTypes";

function PomoSetting(){
    const state =useSelector(state => state.pomodoro);
    const dispatch = useDispatch();
    return(
        <div className="pomo-timer container">
            <div className="row pomo-timer">
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onClick={()=>dispatch(incrementHour())}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{state.setHour}</p>
                    </div>
                    <div className="row button-down" onClick={()=>dispatch(decrementHour())}></div>
                    <div className="timer-class">
                        Hours
                    </div>
                </div>
                <div className="column">
                    <p className='col-name'>:</p>
                </div>
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onClick={() => dispatch(incrementMinute())}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{state.setMinute}</p>
                    </div>
                    <div className="row button-down" onClick={() =>dispatch(decrementMinute())}></div>
                    <div className="timer-class">
                        Minute
                    </div>
                </div>
                <div className="column">
                    <p className='col-name'>:</p>
                </div>
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onClick={() =>dispatch(incrementSecond())}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{state.setSecond}</p>
                    </div>
                    <div className="row button-down" onClick={() =>dispatch(decrementSecond())}></div>
                    <div className="timer-class">
                        Seconds
                    </div>
                </div>
            </div>
            <div className="row pomo-mode">
                <p>Study Time</p>
            </div>
        </div>
    )
}

export default PomoSetting;