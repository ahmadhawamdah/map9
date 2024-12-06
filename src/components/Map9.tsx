"use client";

import Button from "@/ui/Button";
import React, { useState } from "react";
import BridgeList from "./BridgeList";
import { Bridge } from "../../typing";
import FilterBridges from "./filter-files/FilterBridges";

interface FilterParams {
  stateCode: number | string;
  yearBuilt: { min: number; max: number };
  functionalClass:  { min: number; max: number };
  designLoad: string;
}

const Map9: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filterParams, setFilterParams] = useState<FilterParams>({
    stateCode: "",
    yearBuilt: { min: 1967, max: 2024 },
    functionalClass:{ min: 0, max: 20 },
    designLoad: "",
  });

  const [filteredBridges, setFilteredBridges] = useState<Bridge[]>([]);

  const handleFilterChange = (key: string, value: any) => {
    setFilterParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApplyFilters = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/bridges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterParams),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch bridges");
      }

      const data: Bridge[] = await res.json();
      setFilteredBridges(data);
    } catch (error) {
      console.error("Error fetching bridges:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Bridge Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-black">Filters</h2>
        <FilterBridges filterParams={filterParams} handleFilterChange={handleFilterChange} />
        <div className="mt-6">
          <Button
            onClick={handleApplyFilters}
            label={loading ? "Loading..." : "Apply Filters"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BridgeList bridges={filteredBridges as Bridge[]} />
        {/* <Map bridges={filteredBridges} /> */}
      </div>
    </div>
  );
};

export default Map9;
