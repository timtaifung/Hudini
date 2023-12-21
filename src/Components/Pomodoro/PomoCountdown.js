import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CountDownBox from "./CountDownBox";
import { animated, useSpringRef, useTransition } from "react-spring";
import { start } from "../../ActionTypes/actionTypes";

function PomoCountdown() {
    const state = useSelector((state) => state.pomodoro);
    const dispatch = useDispatch();
    const transRefEnter = useSpringRef();
    const transRefLeave = useSpringRef();

    const [isTransitioning, setTransitioning] = useState(false);

    const [currentMode, setCurrentMode] = useState(state.currentMode);
    const [currentStudyHour, setCurrentStudyHour] = useState(state.setHour);
    const [currentStudyMinute, setCurrentStudyMinute] = useState(
        state.setMinute
    );
    const [currentStudySecond, setCurrentStudySecond] = useState(
        state.setSecond
    );

    const [currentRestHour, setCurrentRestHour] = useState(state.restHour);
    const [currentRestMinute, setCurrentRestMinute] = useState(state.restMinute);
    const [currentRestSecond, setCurrentRestSecond] = useState(state.restSecond);

    const transitionsEnter = useTransition(currentMode, {
        ref: transRefEnter,
        keys: null,
        from: { opacity: 0, transform: "translate3d(100%,0,0)" },
        enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
        onRest: () => setTransitioning(false),
    });

    const transitionsLeave = useTransition(currentMode, {
        ref: transRefLeave,
        keys: null,
        leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (currentMode === 2) {
                if (currentStudySecond > 0) {
                    setCurrentStudySecond(currentStudySecond - 1);
                } else {
                    if (currentStudyMinute > 0) {
                        setCurrentStudyMinute(currentStudyMinute - 1);
                        setCurrentStudySecond(59);
                    } else {
                        if (currentStudyHour > 0) {
                            setCurrentStudyHour(currentStudyHour - 1);
                            setCurrentStudyMinute(59);
                            setCurrentStudySecond(59);
                        } else {
                            // Study countdown is complete
                            setCurrentMode(3);
                            setCurrentStudyHour(state.setHour);
                            setCurrentStudyMinute(state.setMinute);
                            setCurrentStudySecond(state.setSecond);
                            dispatch(start());
                        }
                    }
                }
            } else if (currentMode === 3) {
                // Rest mode
                if (currentRestSecond > 0) {
                    setCurrentRestSecond(currentRestSecond - 1);
                } else {
                    if (currentRestMinute > 0) {
                        setCurrentRestMinute(currentRestMinute - 1);
                        setCurrentRestSecond(59);
                    } else {
                        if (currentRestHour > 0) {
                            setCurrentRestHour(currentRestHour - 1);
                            setCurrentRestMinute(59);
                            setCurrentRestSecond(59);
                        } else {
                            // Rest countdown is complete
                            setCurrentMode(2);
                            setCurrentRestHour(state.restHour);
                            setCurrentRestMinute(state.restMinute);
                            setCurrentRestSecond(state.restSecond);
                            dispatch(start());
                        }
                    }
                }
            }
        }, 1000);

        // Cleanup function for countdown interval
        return () => clearInterval(countdownInterval);
    }, [
        currentMode,
        currentStudyHour,
        currentStudyMinute,
        currentStudySecond,
        currentRestHour,
        currentRestMinute,
        currentRestSecond,
    ]);

    useEffect(() => {
        setTransitioning(true);
        transRefEnter.start();
        transRefLeave.start();
    }, [currentMode]);

    return (
        <div className="row countdown-container" style={{ justifyContent: "center"}}>
            {transitionsLeave((style, item) => (
                <animated.div key={item} style={style}>
                    {transitionsEnter((style, item) => {
                        let componentToRender;

                        switch (item) {
                            case 2:
                                componentToRender = (
                                    <CountDownBox
                                        currentHour={currentStudyHour}
                                        currentMinute={currentStudyMinute}
                                        currentSecond={currentStudySecond}
                                    />
                                );
                                break;
                            case 3:
                                componentToRender = (
                                    <CountDownBox
                                        currentHour={currentRestHour}
                                        currentMinute={currentRestMinute}
                                        currentSecond={currentRestSecond}
                                    />
                                );
                        }

                        return (
                            <animated.div key={item} style={style}>
                                {componentToRender}
                            </animated.div>
                        );
                    })}
                </animated.div>
            ))}
        </div>
    );
}

export default PomoCountdown;
