import React from "react";

interface ButtonProps {
  id: string;
  leftIcon?: React.ReactNode;
  title: string;
  containerClass?: string;
}

const Button = ({ id, leftIcon, title, containerClass }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit  cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
    </button>
  );
};

export default Button;
