import "./App.css";
import Hero from "./components/Hero.jsx";
import Summarize from "./components/Summarize.jsx";

const App = () => {
  return (
    <main>
      <div className="main" />
      <div className="app">
        <Hero />
        <Summarize />
      </div>
    </main>
  );
};

export default App;
