import React, { ChangeEvent } from "react";

type RangeInputProps = {
  label: string;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  min?: number;
  max?: number;
};

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max,
}) => {
  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const min = parseInt(e.target.value, 10) || 0;
    onChange({ ...value, min });
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const max = parseInt(e.target.value, 10) || 0;
    onChange({ ...value, max });
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-600 font-medium">{label}</label>
      <div className="grid grid-cols-2 gap-4">
        <input
          min={min}
          type="number"
          placeholder="Min"
          value={value.min}
          onChange={handleMinChange}
          className="outline-none px-4 py-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-black text-black"
        />
        <input
          max={max}
          type="number"
          placeholder="Max"
          value={value.max}
          onChange={handleMaxChange}
          className="outline-none px-4 py-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-black text-black"
        />
      </div>
    </div>
  );
};

export default RangeInput;
