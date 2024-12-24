import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import HeroSection from "./components/HeroSection";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);

  return (
    <div data-scroll-container>
      <HeroSection />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
