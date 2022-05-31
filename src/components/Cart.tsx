import React from "react";
import CartCSS from "./Cart.module.css";
import { AppStateContext } from "../components/AppState";

interface Props {}

const Cart: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const state = React.useContext(AppStateContext);
  const itemsCount = state.cart.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={CartCSS.cartContainer}>
        <button
          className={CartCSS.button}
          type="button"
          onClick={(e) => handleClick(e)}
        >
          {itemsCount} task(s)
        </button>
      </div>
      <div
        className={CartCSS.cartDropDown}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <ul>
          {state.cart.items.map((item) => (
            <li key={item.id}>
              {item.name} &times; {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
