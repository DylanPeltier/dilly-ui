import React from "react";
import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant, className = "", ...props }) => {
  return (
    <button
      className={`dillyui-button ${variant}`.trim()}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
