import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children?: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick} className={`button-${props.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
