import './App.css';
import Nav from "./Components/Navigation/Nav";
import Intro from "./Components/Introduction/Intro";
import Pomodoro from "./Components/Pomodoro/PomodoroMain";

function App() {
  return (
    <div className="App">
      <header className="Nav-Component">
          <Nav/>
      </header>
      <main>
          {/*<Intro text="Welcome." delay={100}/>*/}
          <Pomodoro/>
      </main>
    </div>
  );
}

export default App;
