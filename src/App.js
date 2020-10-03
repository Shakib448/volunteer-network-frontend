import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Home />
    </div>
  );
}

export default App;
