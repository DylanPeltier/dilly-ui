import React from "react";
import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "red" | "blue" | "gray";
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button
      className={`dillyui-button ${variant}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
