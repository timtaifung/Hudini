import NavButton from "./Nav-Button";
import NavTitle from "./Nav-Title";
import "./Navigation.css"


function Nav(){
    return(
        <div className="Nav-container container">
            <div className="row">
                <div className="col-2">
                    <NavButton title='Pomodoro'/>
                </div>
                <div className="col-2">
                    <NavButton title="To-Do List"/>
                </div>
                <div className="col-4">
                    <NavTitle title='Hudini'/>
                </div>
                <div className="col-2">
                    <NavButton title="AskGPT"/>
                </div>
                <div className="col-2">
                    <NavButton title="Weather"/>
                </div>
            </div>
        </div>
    )
}
export default Nav;