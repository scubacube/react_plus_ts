import React from "react";

interface Props {}

interface State {
  isOpen: false;
}
class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render(): React.ReactNode {
    return (
      <>
        <div>
          <button></button>
        </div>
        <ul>
          <li> </li>
        </ul>
      </>
    );
  }
}
