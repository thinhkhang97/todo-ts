import React, { ReactNode, Children } from "react";

interface Props {
  title?: string;
  onClick?: () => void;
}

export class Button extends React.Component<Props> {
  render(): ReactNode {
    const { title, onClick } = this.props;
    return <button onClick={onClick}>{title}</button>;
  }
}
