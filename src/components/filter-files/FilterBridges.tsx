import React, { ChangeEvent } from "react";
import TextInput from "@/ui/TextInput";
import Dropdown from "@/ui/DropDown";
import RangeInput from "@/ui/RangeInput";

interface FilterBridgesProps {
  filterParams: {
    stateCode: number | string;
    yearBuilt: { min: number; max: number };
    functionalClass: { min: number; max: number };
    designLoad: string;
  };
  handleFilterChange: (key: string, value: any) => void;
}

const designLoads = ["C", "B", "A", "9", "6", "5"];

const FilterBridges: React.FC<FilterBridgesProps> = ({
  filterParams,
  handleFilterChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextInput
        label="State Code"
        placeholder="Enter State Code"
        value={filterParams.stateCode}
        onChange={(e) => handleFilterChange("stateCode", e.target.value)}
      />
      <RangeInput
        label="Year Built"
        value={filterParams.yearBuilt}
        onChange={(value) => handleFilterChange("yearBuilt", value)}
      />
      <RangeInput
        label="Functional Class"
        value={filterParams.functionalClass}
        onChange={(value) => handleFilterChange("functionalClass", value)}
      />
      <Dropdown
        label="Design Load"
        options={designLoads}
        selected={filterParams.designLoad}
        onSelect={(value) => handleFilterChange("designLoad", value)}
      />
    </div>
  );
};

export default FilterBridges;
