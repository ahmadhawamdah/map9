import React, { ChangeEvent } from "react";
import TextInput from "@/ui/TextInput";
import Dropdown from "@/ui/DropDown";
import RangeInput from "@/ui/RangeInput";

interface FilterConditionsProps {
  filterParams: {
    deckCondition: string;
    superstructureCondition: string;
    culvertCondition: string;
    structuralEval: string;
    bridgeCondition: string;
    lowestRating: { min: number; max: number };
  };
  handleFilterChange: (key: string, value: any) => void;
}

const conditionRatings = ["Excellent", "Good", "Fair", "Poor", "Critical"];

const FilterConditions: React.FC<FilterConditionsProps> = ({
  filterParams,
  handleFilterChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Dropdown
        label="Deck Condition"
        options={conditionRatings}
        selected={filterParams.deckCondition}
        onSelect={(value) => handleFilterChange("deckCondition", value)}
      />
      <Dropdown
        label="Superstructure Condition"
        options={conditionRatings}
        selected={filterParams.superstructureCondition}
        onSelect={(value) =>
          handleFilterChange("superstructureCondition", value)
        }
      />
      <Dropdown
        label="Culvert Condition"
        options={conditionRatings}
        selected={filterParams.culvertCondition}
        onSelect={(value) => handleFilterChange("culvertCondition", value)}
      />
      <Dropdown
        label="Structural Evaluation"
        options={conditionRatings}
        selected={filterParams.structuralEval}
        onSelect={(value) => handleFilterChange("structuralEval", value)}
      />
      <Dropdown
        label="Bridge Condition"
        options={conditionRatings}
        selected={filterParams.bridgeCondition}
        onSelect={(value) => handleFilterChange("bridgeCondition", value)}
      />
      <RangeInput
        label="Lowest Rating"
        value={filterParams.lowestRating}
        onChange={(value) => handleFilterChange("lowestRating", value)}
        min={0}
        max={10}
      />
    </div>
  );
};

export default FilterConditions;
