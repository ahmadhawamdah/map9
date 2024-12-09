"use client"
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type }) => {
  const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none";
  const variant = "bg-white border-2 h-12 hover:border-none text-black hover:bg-yellow-400 hover:text-black hover:scale-110 disabled:bg-blue-300 ease-in-out transition delay-50 cursor-pointerease-in-out transition delay-50 cursor-pointer w-30  w-36";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variant}`}
      type = {type}
    >
      {label}
    </button>
  );
};

export default Button;