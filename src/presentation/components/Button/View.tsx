import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  startIcon?: React.JSX.Element | React.ReactNode;
  endIcon?: React.JSX.Element | React.ReactNode;
  variant?: "filled" | "outlined" | "text";
  color?: "primary" | "secondary";
}

const Button = ({
  text,
  startIcon,
  endIcon,
  variant = "filled",
  color = "primary",
  className,
  ...buttonProps
}: Props) => {
  return (
    <div className="button__wrapper">
      <button
        className={`button__element ${variant + "-" + color} ${className} ${
          buttonProps.disabled ? "disabled-button" : ""
        }`}
        {...buttonProps}
      >
        <div>{!!startIcon && startIcon}</div>
        {text}
        <div>{!!endIcon && endIcon}</div>
      </button>
    </div>
  );
};

export default Button;
