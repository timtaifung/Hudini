import "./Pomodoro.css"
import PomoSetting from "./PomoSetting";
import IntroButton from "../Introduction/IntroButton";

function Pomodoro(){
    return(
        <div className="pomodoro-container container">
            <div className="row pomodoro-title">
                <p>POMODORO</p>
            </div>
            <div className="row pomo-desc">
                <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. Set your timer for 25 minutes, and focus on a single task until the timer rings. When your session ends, mark off one pomodoro and record what you completed. Then enjoy a five-minute break. After four pomodoros, take a longer, more restorative 15-30 minute break.</p>
            </div>
            <div className="row">
                <PomoSetting/>
            </div>
            <div className="row pomo-buttom">
                <div className="col-2">
                    <IntroButton title="Start"/>
                </div>
                <div className="col-2">
                    <IntroButton title="Pause"/>
                </div>
                <div className="col-2">
                    <IntroButton title="Reset"/>
                </div>
            </div>
        </div>
    )
}

export default Pomodoro;