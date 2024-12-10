"use client";
import React, { useState, useEffect, useRef } from "react";

type DropdownProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  label?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-w-[200px]" ref={dropdownRef}>
      {label && <label className="text-black font-medium mb-2 block">{label}</label>}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left px-4 py-2 border text-gray-800 border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none bg-white"
      >
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto z-30">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  onSelect(option); // Select the option
                  setIsOpen(false); // Close the dropdown
                }}
                className="px-4 py-2 text-black hover:bg-yellow-300 cursor-pointer"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
