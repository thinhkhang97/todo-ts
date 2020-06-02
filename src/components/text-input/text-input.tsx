import React, { ReactNode } from "react";

interface Props {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export class TextInput extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChangeText } = this.props;
    onChangeText && onChangeText(e.target.value);
  };

  render(): ReactNode {
    const { placeholder, value } = this.props;
    return (
      <input
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}
