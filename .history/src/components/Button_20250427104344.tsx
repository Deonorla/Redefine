import React from "react";

interface ButtonProps {
  id: string;
  leftIcon?: React.ReactNode;
  title: string;
  containerClass?: string;
}

const Button = ({ id, leftIcon, title, containerClass }: ButtonProps) => {
  return <div>{title}</div>;
};

export default Button;
