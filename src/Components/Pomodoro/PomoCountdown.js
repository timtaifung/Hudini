import {useState} from "react";

function PomoCountdown(){
    const [currentSecond,setCurrentSecond] = useState(0);
    const [currentMinute, setCurrentMinute] = useState(0);
    const [currentHour, setCurrentHour] = useState(0);

    const incrementSecond = () =>{
        if(currentSecond===60){
            setCurrentMinute(currentMinute+1);
            return setCurrentSecond(0);
        }
        setCurrentSecond(currentSecond+1);
    }
    const decrementSecond = () =>{
        if(currentSecond === 0){
            return alert("Counter cannot be lower than 0");
        }else{
            setCurrentSecond(currentSecond-1);
        }
    }
    const incrementMinute = () =>{
        if(currentMinute===60){
            setCurrentHour(currentHour+1);
            return setCurrentMinute(0);
        }
        setCurrentMinute(currentMinute+1);
    }
    const decrementMinute = () =>{
        if(currentMinute === 0){
            return alert("Counter cannot be lower than 0");
        }else{
            setCurrentMinute(currentMinute-1);
        }
    }
    const incrementHour = () =>{
        setCurrentHour(currentHour+1);
    }
    const decrementHour = () =>{
        if(currentHour === 0){
            return alert("Counter cannot be lower than 0");
        }else{
            setCurrentHour(currentHour-1);
        }
    }



    return(
        <div className="pomo-timer container">
            <div className="row pomo-timer">
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onMouseDown={incrementHour}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{currentHour}</p>
                    </div>
                    <div className="row button-down" onMouseDown={decrementHour}></div>
                    <div className="timer-class">
                        Hours
                    </div>
                </div>
                <div className="column">
                    <p className='col-name'>:</p>
                </div>
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onMouseDown={incrementMinute}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{currentMinute}</p>
                    </div>
                    <div className="row button-down" onMouseDown={decrementMinute}></div>
                    <div className="timer-class">
                        Minute
                    </div>
                </div>
                <div className="column">
                    <p className='col-name'>:</p>
                </div>
                <div className="timer-box-cont col-1">
                    <div className="row">
                        <div className="button-up" onMouseDown={incrementSecond}></div>
                    </div>
                    <div className="row timer-box">
                        <p>{currentSecond}</p>
                    </div>
                    <div className="row button-down" onMouseDown={decrementSecond}></div>
                    <div className="timer-class">
                        Seconds
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PomoCountdown;