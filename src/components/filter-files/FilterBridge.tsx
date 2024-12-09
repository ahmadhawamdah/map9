import React from "react";
import TextInput from "@/ui/TextInput";
import Dropdown from "@/ui/DropDown";
import RangeInput from "@/ui/RangeInput";
import { reverseMap } from "@/utils/reverseMap";
import { highwayMap, serviceMap } from "../NBIHashmaps";

interface FilterBridgesParams {
  filterParams: {
    location: number | string;
    yearBuilt: { min: number; max: number };
    yearReconstructed: { min: number; max: number };
    fedAgency: string;
    serviceOn: number | null;
    routePrefix: number;
  };
  handleFilterChange: (key: string, value: any) => void;
}



const FilterBridge: React.FC<FilterBridgesParams> = ({
  filterParams,
  handleFilterChange,
}) => {
  const reverseServiceMap = reverseMap(serviceMap);
  const reverseHighwayMap = reverseMap(highwayMap);

  return (
    <div className="grid grid-cols-3 gap-4">
      <TextInput
        label="Location"
        placeholder="Enter State Code"
        value={filterParams.location}
        onChange={(e) => handleFilterChange("stateCode", e.target.value)}
      />
      <RangeInput
        label="Year Built"
        value={filterParams.yearBuilt}
        onChange={(value) => handleFilterChange("yearBuilt", value)}
        min = {1697}
        max = {2021}
      />
      <RangeInput
        label="Year Reconstructed"
        value={filterParams.yearReconstructed}
        onChange={(value) => handleFilterChange("yearReconstructed", value)}
        min = {0}
        max = {2021}
      />
      <Dropdown
        label="Federal Agency"
        options={["Y", "N"]}
        selected={filterParams.fedAgency}
        onSelect={(value) => {
          handleFilterChange("fedAgency", value);
        }}
      />
      <Dropdown
        label="Highway"
        options={Object.values(highwayMap)} 
        selected={highwayMap[String(filterParams.routePrefix)]} 
        onSelect={(value) => {
          const selectedKey = reverseHighwayMap[value]; 
          handleFilterChange("routePrefix", parseInt(selectedKey, 10)); // Parse key back to number
        }}
      />
      <Dropdown
        label="Service"
        options={Object.values(serviceMap)}
        selected={serviceMap[String(filterParams.serviceOn)]} 
        onSelect={(value) => {
          const selectedKey = reverseServiceMap[value]; 
          handleFilterChange("serviceOn", parseInt(selectedKey, 10)); 
        }}
      />
    </div>
  );
};

export default FilterBridge;
