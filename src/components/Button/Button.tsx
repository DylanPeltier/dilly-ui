import React from "react"
import "./Button.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const colorClasses = () => {
    switch (variant) {
      case "primary":
        return { borderColor: '#6366F1', backGroundColor: '#6366F1', color: '#FAFAFA' }
      case "secondary":
        return { borderColor: '#6366F1', backGroundColor: '#FAFAFA', color: '#6366F1' }
      default:
        return { borderColor: '#6366F1', backGroundColor: '#6366F1', color: '#FAFAFA' }
    }
  }
  return <button style={{ ...colorClasses(), ...props.style }} className="px-4 py-2 rounded-md" {...props}>
    {props.children}
  </button>
}

export default Button