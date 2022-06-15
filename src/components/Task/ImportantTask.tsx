import React from "react";
import { Props } from "../../types";
import { useAddToCart } from "../AddToCart";

const ImportantTask: React.FC<Props> = ({ task, addToCart }) => {
  const addItem = useAddToCart();

  const addTask = () =>
    addItem({
      id: task.id,
      name: task.name,
      description: "",
    });

  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={addTask}>add to cart</button>
    </div>
  );
};

export default ImportantTask;
