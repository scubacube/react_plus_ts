import React from "react";
import tasks from "./data/tasks.json";
import Task from "./components/Task/Task";
import { List, LogoContainer } from "./AppStyles";
import Logo from "./assets/Logo.svg";
import Cart from "./components/Cart/Cart";
import AppStateProvider from "./components/AppState";
import GlobalStyle from "./global";
import ImportantTask from "./components/Task/ImportantTask";

const App = () => {
  const importantTasks = tasks.filter((el) => el.important);
  return (
    <AppStateProvider>
      <GlobalStyle />
      <List>
        <LogoContainer>
          <Logo width={50} />
        </LogoContainer>
        <Cart />
        {importantTasks &&
          importantTasks.map((element) => <ImportantTask task={element} />)}
        <ul>
          {tasks.map((element) => (
            <Task key={element.id} task={element} />
          ))}
        </ul>
      </List>
    </AppStateProvider>
  );
};

export default App;
