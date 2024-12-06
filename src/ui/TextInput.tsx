import React, { ChangeEvent } from "react";

type TextInputProps = {
  label: string;
  placeholder: string;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-600 font-medium">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none px-4 py-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-black text-black"
        />
      </div>
    </div>
  );
};

export default TextInput;
