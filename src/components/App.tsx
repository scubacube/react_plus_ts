import React from "react";
import tasks from '../data/tasks.json';
import Task from "./Task";

const App = () => {
    return (
        <ul>{tasks.map(element => <Task key={element.id} task={element}/>)}</ul>
    );
}

export default App;