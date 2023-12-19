import "./Intro.css"

function IntroButton({title}){
    return(
        <div className="introButton container">
            <p>{title}</p>
        </div>
    )
}

export default IntroButton;