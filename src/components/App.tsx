import React from "react";
import tasks from "../data/tasks.json";
import Task from "./Task";
import AppCSS from "./App.module.css";
import Logo from "../assets/logo.svg";

const App = () => {
  return (
    <div className={AppCSS.list}>
      <Logo width={150} />
      <ul>
        {tasks.map((element) => (
          <Task key={element.id} task={element} />
        ))}
      </ul>
    </div>
  );
};

export default App;
