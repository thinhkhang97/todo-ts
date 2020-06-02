import React, { ReactNode } from "react";

interface Props {
  text: string;
  done?: boolean;
}

export class Item extends React.Component<Props> {
  render(): ReactNode {
    const { text, done } = this.props;
    return (
      <div style={{ textDecoration: done ? "line-through" : "none" }}>
        {text}
      </div>
    );
  }
}
