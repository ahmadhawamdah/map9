import React from "react";
import Dropdown from "@/ui/DropDown";
import RangeInput from "@/ui/RangeInput";
import { reverseMap } from "@/utils/reverseMap";
import { conditionMap, overallConditionMap } from "../NBIHashmaps";

interface FilterConditionsProps {
  filterParams: {
    bridgeCondition: string;
    deckCond: string;
    superstructureCond: string;
    substructureCond: string;
    channelCond: string;
    culvertCond: string;
    structuralEval: string;
    deckGeometryEval: string;
    underclearanceEval: string;
    waterwayEval: string;
    apprRoadEval: { min: number; max: number };
    postingEval: { min: number; max: number };
    lowestRating: { min: number; max: number };
  };
  handleFilterChange: (key: string, value: any) => void;
}


// Reverse maps
const reverseConditionMap = reverseMap(conditionMap);
const reverseOverallConditionMap = reverseMap(overallConditionMap);

const FilterCondition: React.FC<FilterConditionsProps> = ({
  filterParams,
  handleFilterChange,
}) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-2">
    {/* Condition Columns */}
    <div className="grid grid-col-1 sm:grid-cols-2 gap-2">
      <Dropdown
        label="Bridge Condition"
        options={Object.values(overallConditionMap)}
        selected={overallConditionMap[filterParams.bridgeCondition]}
        onSelect={(value) => {
          const selectedKey = reverseOverallConditionMap[value];
          handleFilterChange("bridgeCondition", selectedKey);
        }}
      />
  
      <Dropdown
        label="Deck Condition"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.deckCond]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("deckCond", selectedKey);
        }}
      />

      <Dropdown
        label="Superstructure Condition"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.superstructureCond]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("superstructureCond", selectedKey);
        }}
      />
  
      <Dropdown
        label="Substructure Condition"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.substructureCond]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("substructureCond", selectedKey);
        }}
      />
  
      <Dropdown
        label="Channel Condition"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.channelCond]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("channelCond", selectedKey);
        }}
      />
  
      <Dropdown
        label="Culvert Condition"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.culvertCond]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("culvertCond", selectedKey);
        }}
      />
    </div>
  
    {/* Evaluation Columns */}
    <div className="grid grid-col-1 sm:grid-cols-2 gap-2">
      <Dropdown
        label="Structural Evaluation"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.structuralEval]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("structuralEval", selectedKey);
        }}
      />
  
      <Dropdown
        label="Deck Geometry Evaluation"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.deckGeometryEval]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("deckGeometryEval", selectedKey);
        }}
      />
      <Dropdown
        label="Under Clearance Evaluation"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.underclearanceEval]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("underclearanceEval", selectedKey);
        }}
      />
      <Dropdown
        label="Waterway Evaluation"
        options={Object.values(conditionMap)}
        selected={conditionMap[filterParams.waterwayEval]}
        onSelect={(value) => {
          const selectedKey = reverseConditionMap[value];
          handleFilterChange("waterwayEval", selectedKey);
        }}
      />

      <RangeInput
        label="Approach Road Evaluation"
        value={filterParams.apprRoadEval}
        onChange={(value) => handleFilterChange("apprRoadEval", value)}
        min={0}
        max={8}
      />
      <RangeInput
        label="Posting Evaluation"
        value={filterParams.postingEval}
        onChange={(value) => handleFilterChange("postingEval", value)}
        min={0}
        max={5}
      />
      {/* <RangeInput
        label="Lowest Rating"
        value={filterParams.lowestRating}
        onChange={(value) => handleFilterChange("lowestRating", value)}
        min={0}
        max={9}
      /> */}
    </div>
  </div>
  );
};

export default FilterCondition;
