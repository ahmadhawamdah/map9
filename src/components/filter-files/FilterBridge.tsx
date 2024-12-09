import React from "react";
import TextInput from "@/ui/TextInput";
import Dropdown from "@/ui/DropDown";
import RangeInput from "@/ui/RangeInput";
import { reverseMap } from "@/utils/reverseMap";

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

const serviceMap: Record<string, string> = {
  "1": "Highway, with or without pedestrian",
  "2": "Railroad",
  "3": "Pedestrian-bicycle",
  "4": "Highway-railroad",
  "5": "Waterway",
  "6": "Highway-waterway",
  "7": "Railroad-waterway",
  "8": "Highway-waterway-railroad",
  "9": "Relief for waterway",
  "0": "Other",
};

const highwayMap: Record<string, string> = {
  "1": "Interstate highway",
  "2": "U.S. numbered highway",
  "3": "State highway",
  "4": "County highway",
  "5": "City street",
  "6": "Federal lands road",
  "7": "State lands road",
  "8": "Other (include toll roads not otherwise)",
};

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
        options={Object.values(highwayMap)} // Dropdown options
        selected={highwayMap[String(filterParams.routePrefix)]} // Safely convert routePrefix to string
        onSelect={(value) => {
          const selectedKey = reverseHighwayMap[value]; // Get key from value
          handleFilterChange("routePrefix", parseInt(selectedKey, 10)); // Parse key back to number
        }}
      />
      <Dropdown
        label="Service"
        options={Object.values(serviceMap)} // Dropdown options
        selected={serviceMap[String(filterParams.serviceOn)]} // Safely convert serviceOn to string
        onSelect={(value) => {
          const selectedKey = reverseServiceMap[value]; // Get key from value
          handleFilterChange("serviceOn", parseInt(selectedKey, 10)); // Parse key back to number
        }}
      />
    </div>
  );
};

export default FilterBridge;
