import {useSelector,useDispatch} from "react-redux";
import {
    decrementHour,
    decrementMinute, decrementSecond,
    incrementHour,
    incrementMinute,
    incrementSecond, resetCounter
} from "../../ActionTypes/actionTypes";
import IntroButton from "../Introduction/IntroButton";

function PomoSetRest(){
    const state =useSelector(state => state.pomodoro);
    const dispatch = useDispatch();
    return(
        <div className="pomo-timer container pomo-restSet">
            <div className="row pomo-timer">
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onClick={()=>dispatch(incrementHour())}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{state.restHour}</p>
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
                        <p>{state.restMinute}</p>
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
                        <p>{state.restSecond}</p>
                        <div className="timer-class">
                            Seconds
                        </div>
                    </div>
                    <div className="row button-down" onClick={() =>dispatch(decrementSecond())}></div>
                </div>
            </div>
            <div className="row pomo-mode rest-text">
                <p>Rest Mode</p>
            </div>

        </div>
    )
}

export default PomoSetRest;