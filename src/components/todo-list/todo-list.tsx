import React, { ReactNode } from "react";
import { Item } from "./item";

interface IItem {
  value: string;
  done?: boolean;
}

interface Props {
  list: IItem[];
  onClick?: (item: IItem) => void;
}

export class TodoList extends React.Component<Props> {
  handleClickItem = (item: IItem): void => {
    const { onClick } = this.props;
    onClick && onClick(item);
  };

  renderListItem(): ReactNode {
    const { list } = this.props;
    return list.map(
      (item: IItem): ReactNode => {
        return (
          <div onClick={(): void => this.handleClickItem(item)}>
            <Item text={item.value} done={item.done} />
          </div>
        );
      }
    );
  }

  render(): ReactNode {
    return <div>{this.renderListItem()}</div>;
  }
}
