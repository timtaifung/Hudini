import "./Pomodoro.css"
import PomoSetStudy from "./PomoSetStudy";
import IntroButton from "../Introduction/IntroButton";
import PomoSetRest from "./PomoSetRest";
import {resetCounter} from "../../ActionTypes/actionTypes";
import {useDispatch, useSelector} from "react-redux";

function Pomodoro(){
    const state =useSelector(state => state.pomodoro);
    const dispatch = useDispatch();
    return(
        <div className="pomodoro-container container">
            <div className="row pomodoro-title">
                <p>POMODORO</p>
            </div>
            <div className="row pomo-desc">
                <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. Set your timer for 25 minutes, and focus on a single task until the timer rings. When your session ends, mark off one pomodoro and record what you completed. Then enjoy a five-minute break. After four pomodoros, take a longer, more restorative 15-30 minute break.</p>
            </div>
            <div className="row">
                <PomoSetRest/>
            </div>
            <div className="row pomo-buttom">
                <div className="col-2" onClick ={() =>dispatch(resetCounter())}>
                    <IntroButton title="Reset" />
                </div>
                <div className="col-2">
                    <IntroButton title="Confirm"/>
                </div>
            </div>

        </div>
    )
}

export default Pomodoro;