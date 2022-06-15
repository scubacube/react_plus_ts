import React from "react";
import { Button, CartContainer, CartDropDown } from "./CartStyles";
import { AppStateContext } from "../AppState";

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
      <CartContainer>
        <Button type="button" onClick={(e) => handleClick(e)}>
          {itemsCount} task(s)
        </Button>
      </CartContainer>
      {state.cart.items.length == 0 ? (
        " "
      ) : (
        <CartDropDown style={{ display: isOpen ? "block" : "none" }}>
          <ul>
            {state.cart.items.map((item) => (
              <li key={item.id}>
                {item.name} &times; {item.quantity}
              </li>
            ))}
          </ul>
        </CartDropDown>
      )}
    </>
  );
};

export default Cart;
