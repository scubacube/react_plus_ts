import React from "react";
import { useStateDispatch } from "../components/AppState";

interface Task {
  id: number;
  name: string;
  description: string;
}

interface Props {
  task: Task;
}

const Task: React.FC<Props> = ({ task }) => {
  const dispatch = useStateDispatch();

  const addTask = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: task.id,
          name: task.name,
          description: task.description,
        },
      },
    });
  };

  return (
    <li>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={addTask}>add to cart</button>
    </li>
  );
};

export default Task;
