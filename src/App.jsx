import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BotBar from "./components/BotBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <BotBar />
    </div>
  );
}

export default App;
