import React from "react"
import "./Button.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const colorClasses = () => {
    if (props.disabled) return {};
    if (variant === "primary") return { borderColor: '#6366F1', backGroundColor: '#6366F1', color: '#FAFAFA' };
    if (variant === "secondary") return { borderColor: '#6366F1', backGroundColor: '#FAFAFA', color: '#6366F1' };
    return {};
  }
  return <button className={`dillyui-button ${props.className}`} style={{ ...colorClasses(), ...props.style }} {...props}>
    {props.children}
  </button>
}

export default Button