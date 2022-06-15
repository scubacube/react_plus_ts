import React from "react";
import { TaskItem } from "./TaskStyles";
import { Props } from "../../types";
import { useAddToCart } from "../useAddToCart";

const Task: React.FC<Props> = ({ task }) => {
  const addItem = useAddToCart();

  const addTask = () =>
    addItem({
      id: task.id,
      name: task.name,
      description: "",
    });

  return (
    <TaskItem>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={addTask}>add to cart</button>
    </TaskItem>
  );
};

export default Task;
