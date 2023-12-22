import {useSelector,useDispatch} from "react-redux";
import {
    decrementHour,
    decrementMinute, decrementSecond,
    incrementHour,
    incrementMinute,
    incrementSecond, resetCounter, setToggle, startTimer
} from "../../ActionTypes/actionTypes";
import IntroButton from "../Introduction/IntroButton";

function PomoSetStudy(){
    const state =useSelector(state => state.pomodoro);
    const dispatch = useDispatch();
    return(
        <div className="pomo-timer container pomo-studySet">
            <div className="row pomo-timer">
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onClick={()=>dispatch(incrementHour())}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{state.setHour}</p>
                        <div className="timer-class">
                            Hours
                        </div>
                    </div>
                    <div className="row button-down" onClick={()=>dispatch(decrementHour())}></div>

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
                        <div className="timer-class">
                            Minutes
                        </div>
                    </div>
                    <div className="row button-down" onClick={() =>dispatch(decrementMinute())}></div>

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
                        <div className="timer-class">
                            Seconds
                        </div>
                    </div>
                    <div className="row button-down" onClick={() =>dispatch(decrementSecond())}></div>
                </div>
            </div>
            <div className="row pomo-mode study-text">
                <p>Study Time</p>
            </div>
            <div className="row pomo-buttom">
                <div className="col-2" onClick={() => dispatch(resetCounter())}>
                    <IntroButton title="Reset" />
                </div>
                <div className="col-2" onClick={() => dispatch(startTimer())}>
                    <IntroButton title="Confirm"  />
                </div>
                <div className="col-2" onClick={() => dispatch(setToggle())}>
                    <IntroButton title="Toggle" />
                </div>
            </div>
        </div>
    )
}

export default PomoSetStudy;