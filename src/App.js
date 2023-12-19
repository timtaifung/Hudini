import './App.css';
import Nav from "./Components/Navigation/Nav";
import Intro from "./Components/Introduction/Intro";

function App() {
  return (
    <div className="App">
      <header className="Nav-Component">
          <Nav/>
      </header>
      <main>
          <Intro text="Welcome." delay={100}/>
      </main>
    </div>
  );
}

export default App;
