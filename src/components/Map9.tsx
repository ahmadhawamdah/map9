"use client";

import Button from "@/ui/Button";
import React, { useState } from "react";
import BridgeList from "./BridgeList";
import {
  Bridge,
  FilterBridgesParams,
  FilterConditionsParams,
} from "../../typing";
import FilterCondition from "./filter-files/FilterCondition";
import FilterBridge from "./filter-files/FilterBridge";
import Mapbox from "./Mapbox";
import BridgeCard from "./bridge-info/BridgeCard";


interface Map9Props {
  type: "bridge" | "condition";
  filterParams: FilterBridgesParams | FilterConditionsParams;
  handleFilterChange: (key: string, value: any) => void;
}

const Map9: React.FC<Map9Props> = ({
  type,
  filterParams,
  handleFilterChange,
}) => {
  const [filteredResults, setFilteredResults] = useState<Bridge[]>([]);
  const [selectedStructureNumber, setSelectedStructureNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApplyFilters = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterParams),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: Bridge[] = await res.json();
      setFilteredResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-black">Filters</h2>
        {type === "bridge" ? (
          <FilterBridge
            filterParams={filterParams as FilterBridgesParams}
            handleFilterChange={handleFilterChange}
          />
        ) : (
          <FilterCondition
            filterParams={filterParams as FilterConditionsParams}
            handleFilterChange={handleFilterChange}
          />
        )}
        <div className="mt-6">
          <Button
            onClick={handleApplyFilters}
            label={loading ? "Loading..." : "Apply Filters"}
          />
        </div>
      </div>

      <div className="sm:flex h-full">
        <Mapbox bridges={filteredResults} />
        <BridgeList bridges={filteredResults} setSelectedStructureNumber={setSelectedStructureNumber} />
        {selectedStructureNumber && (
          <BridgeCard
            structureNumber={selectedStructureNumber}
            setSelectedStructureNumber={setSelectedStructureNumber}
          />
        )}
      </div>
    </div>
  );
};

export default Map9;
