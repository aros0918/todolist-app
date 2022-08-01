import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Todolist from "./components/Todolist/Todolist";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Todolist />
    </div>
  );
};

export default App;
