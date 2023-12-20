import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function PomoCountdown() {
    const state = useSelector((state) => state.pomodoro);
    const dispatch = useDispatch();
    const [currentStudyHour, setCurrentStudyHour] = useState(state.setHour);
    const [currentStudyMinute, setCurrentStudyMinute] = useState(state.setMinute);
    const [currentStudySecond, setCurrentStudySecond] = useState(state.setSecond);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            // Decrement the time values
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
                        // Countdown is complete, you can handle this case (e.g., display a message, reset, etc.)
                        clearInterval(countdownInterval);
                    }
                }
            }
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(countdownInterval);
    }, [currentStudyHour, currentStudyMinute, currentStudySecond]);

    // Handle the case when the countdown reaches zero


    return (
        <div className="row countdown-container">
            <div className="countdown-box row">
                <div className="col-2">
                    <p className="countdown row">{currentStudyHour}</p>
                    <p className="row label-box">Hours</p>
                </div>
                <p className="countdown col-1 comma">:</p>
                <div className="col-2">
                    <p className="countdown row">{currentStudyMinute}</p>
                    <p className="row label-box">Minutes</p>
                </div>
                <p className="countdown col-1 comma">:</p>
                <div className="col-2">
                    <p className="countdown row">{currentStudySecond}</p>
                    <p className="row label-box">Seconds</p>
                </div>
            </div>
        </div>


    );
}

export default PomoCountdown;
