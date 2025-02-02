import { Component, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children?: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  style?: object;
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.handleClick} style={this.props.style}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
