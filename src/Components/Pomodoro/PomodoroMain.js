import "./Pomodoro.css";
import PomoSetStudy from "./PomoSetStudy";
import IntroButton from "../Introduction/IntroButton";
import PomoSetRest from "./PomoSetRest";
import {resetCounter, setToggle, start, startTimer} from "../../ActionTypes/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { useTransition, animated, useSpringRef } from "react-spring";
import { useEffect, useState } from "react";
import PomoCountdown from "./PomoCountdown";

function Pomodoro() {
    const [isTransitioning, setTransitioning] = useState(false);
    const state = useSelector((state) => state.pomodoro);
    const dispatch = useDispatch();
    const transRefEnter = useSpringRef();
    const transRefLeave = useSpringRef();

    const transitionsEnter = useTransition(state.currentMode, {
        ref: transRefEnter,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        onRest: () => setTransitioning(false),
    });

    const transitionsLeave = useTransition(state.currentMode, {
        ref: transRefLeave,
        keys: null,
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    useEffect(() => {
        setTransitioning(true);
        transRefEnter.start();
        transRefLeave.start();
    }, [state.currentMode]);

    return (
        <div className="pomodoro-container container">
            <div className="row pomodoro-title">
                <p>POMODORO</p>
            </div>
            <div className="row pomo-desc">
                <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. Set your timer for 25 minutes, and focus on a single task until the timer rings. When your session ends, mark off one pomodoro and record what you completed. Then enjoy a five-minute break. After four pomodoros, take a longer, more restorative 15-30 minute break.</p>
            </div>
            <div className="row" style={{ justifyContent: "center"}}>
                {transitionsLeave((style, currentMode) => (
                    <animated.div key={currentMode} style={style}>
                        {transitionsEnter((style, currentMode) => {
                            let componentToRender;

                            switch (state.currentMode) {
                                case 0:
                                    componentToRender = <PomoSetStudy />;
                                    break;
                                case 1:
                                    componentToRender = <PomoSetRest />;
                                    break;
                                case 2:
                                    componentToRender = <PomoCountdown />;
                                    break;
                                default:
                                    componentToRender = <PomoSetStudy />;
                            }

                            return <animated.div key={currentMode} style={style}>{componentToRender}</animated.div>;
                        })}
                    </animated.div>
                ))}
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
                <div className="col-2" onClick={() => dispatch(start())}>
                    <IntroButton title="Start" />
                </div>
            </div>
        </div>
    );
}

export default Pomodoro;
