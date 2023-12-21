

function CountDownBox({currentHour, currentMinute, currentSecond}){
    return(
        <div className="countdown-box row">
            <div className="col-2">
                <p className="countdown row">{currentHour}</p>
                <p className="row label-box">Hours</p>
            </div>
            <p className="countdown col-1 comma">:</p>
            <div className="col-2">
                <p className="countdown row">{currentMinute}</p>
                <p className="row label-box">Minutes</p>
            </div>
            <p className="countdown col-1 comma">:</p>
            <div className="col-2">
                <p className="countdown row">{currentSecond}</p>
                <p className="row label-box">Seconds</p>
            </div>
        </div>
    )
}
export default CountDownBox;