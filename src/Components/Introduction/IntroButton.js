import "./Intro.css"

function IntroButton({title, color}){
    return(
        <div className="introButton container" style={{color: color}}>
            <p>{title}</p>
        </div>
    )
}

export default IntroButton;