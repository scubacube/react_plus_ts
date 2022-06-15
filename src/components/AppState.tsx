import React, { createContext, useContext, useEffect, useReducer } from "react";
import { CartItem } from "../types";

interface Props {
  children: React.ReactNode;
}

interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}

const defaultAppStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultAppStateValue);

export const AppDispatchContext = createContext<
  React.Dispatch<AddToCartAction> | undefined
>(undefined);

interface Action<T> {
  type: T;
}
interface AddToCartAction extends Action<"ADD_TO_CART"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}
interface InitCartAction extends Action<"INIT_CART"> {
  payload: {
    cart: AppStateValue["cart"];
  };
}

const reducer = (
  state: AppStateValue,
  action: AddToCartAction | InitCartAction
) => {
  if (action.type === "ADD_TO_CART") {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      cart: {
        ...state.cart,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [
              ...state.cart.items,
              {
                id: itemToAdd.id,
                name: itemToAdd.name,
                description: itemToAdd.description,
                quantity: 1,
              },
            ],
      },
    };
  } else if (action.type === "INIT_CART") {
    return { ...state, cart: action.payload.cart };
  }
  return state;
};

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      "useStateDispatch was called outside of the AppSetStateContext provider"
    );
  }
  return dispatch;
};

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultAppStateValue);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      dispatch({ type: "INIT_CART", payload: { cart: JSON.parse(cart) } });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
