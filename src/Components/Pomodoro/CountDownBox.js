function CountDownBox({ currentHour, currentMinute, currentSecond, mode }) {
    let style;

    const colorPallet = (mode) => {
        switch (mode) {
            case "study":
                style = {
                    border: "1px solid #FF4742",
                    color: "#FF4742",
                };
                break;
            case "rest":
                style = {
                    border: "1px solid #014421",
                    color: "#014421",
                };
                break;
            default:
                style = {}; // Provide a default style
        }

        return style; // Return the style object
    };

    style = colorPallet(mode);

    return (
        <div className="countdown-box row" style={style}>
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
    );
}

export default CountDownBox;
