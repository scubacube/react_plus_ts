import React from "react";
import tasks from "./data/tasks.json";
import Task from "./components/Task";
import AppCSS from "./App.module.css";
import Logo from "./assets/Logo.svg";
import Cart from "./components/Cart";
import AppStateProvider from "./components/AppState";

const App = () => {
  return (
    <AppStateProvider>
      <div className={AppCSS.list}>
        <Cart />
        <Logo width={150} />

        <ul>
          {tasks.map((element, index) => (
            <Task key={index} task={element} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
