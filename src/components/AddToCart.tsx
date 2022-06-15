import { AddToCartProps } from "../types";
import { useStateDispatch } from "./AppState";

export const useAddToCart = () => {
  const dispatch = useStateDispatch();

  const addTask: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };

  return addTask;
};
