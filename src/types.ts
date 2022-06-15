
export interface ITask {
  id: number;
  name: string;
  description: string;
  important?: boolean;
}

export interface Props {
  task: ITask;
}

export interface AddToCartProps {
  addToCart: (items: Omit<CartItem, "quantity">) => void;
}

export interface CartItem {
  id: number;
  name: string;
  description: string;
  quantity: number;
}