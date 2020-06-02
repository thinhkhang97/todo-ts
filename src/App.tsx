import React, { ReactNode } from "react";
import { TextInput, Button, TodoList } from "./components";

interface Props {}

interface Item {
  value: string;
  done?: boolean;
}

interface State {
  todo: Item[];
  text: string;
}

export class App extends React.Component<Props, State> {
  state: State = {
    todo: [],
    text: "",
  };

  handleChangeTodo = (text: string): void => {
    this.setState({ text });
  };

  handleClickAdd = (): void => {
    const { todo, text } = this.state;
    this.setState({ todo: todo.concat({ value: text, done: false }) });

    // reset text input
    this.setState({ text: "" });
  };

  handleClickItem = (item: Item): void => {
    const { todo } = this.state;
    // Change todo status
    this.setState({
      todo: todo.map(
        (todoItem: Item): Item => {
          if (todoItem === item) {
            // Return all property of item, just change the status.
            return { ...item, done: !todoItem.done };
          }
          return item;
        }
      ),
    });
  };

  render(): ReactNode {
    const { todo, text } = this.state;
    return (
      <div>
        <h1>Todo app</h1>
        <TextInput
          value={text}
          placeholder='What you need do to?'
          onChangeText={this.handleChangeTodo}
        />
        <Button title='Add' onClick={this.handleClickAdd} />
        <TodoList list={todo} onClick={this.handleClickItem} />
      </div>
    );
  }
}
