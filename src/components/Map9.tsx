"use client";

import Button from "@/ui/Button";
import React, { useEffect, useState, useCallback } from "react";
import BridgeList from "./BridgeList";
import {
  Bridge,
  FilterBridgesParams,
  FilterConditionsParams,
  ViewportState,
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
  const [selectedStructureNumber, setSelectedStructureNumber] = useState<
    string | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);
  const [viewport, setViewport] = useState<ViewportState>({
    longitude: -79.99,
    latitude: 40.44,
    zoom: 10,
    bounds: [
      -80.2433721923, 40.25736666160802, -79.74761413572277, 40.63464561993629,
    ] as [number, number, number, number], // Default viewport bounds
  });

  // Unified function to fetch bridges, applies filters & viewport bounds
  const fetchBridges = useCallback(async () => {
    if (!viewport.bounds) return; // Ensure viewport bounds exist before fetching
    setLoading(true);

    try {
      const res = await fetch(`/api/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...filterParams, bounds: viewport.bounds }), // Always send both filters & bounds
      });

      if (!res.ok) throw new Error("Failed to fetch data");

      const data: Bridge[] = await res.json();
      setFilteredResults(data);
    } catch (error) {
      console.error("Error fetching bridges:", error);
    } finally {
      setLoading(false);
    }
  }, [viewport.bounds, filterParams]); // Update when viewport or filters change

  // Apply filters manually when user clicks the "Apply Filters" button
  const handleApplyFilters = () => {
    fetchBridges();
  };

  // Automatically fetch bridges when the map viewport changes (debounced)
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchBridges();
    }, 500); // Debounce viewport updates to avoid excessive API calls

    return () => clearTimeout(handler);
  }, [viewport.bounds, filterParams]);

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
        <Mapbox
          bridges={filteredResults}
          viewport={viewport}
          setViewport={setViewport}
        />
        <BridgeList
          cardLoading = {cardLoading}
          bridges={filteredResults}
          setSelectedStructureNumber={setSelectedStructureNumber}
        />
{selectedStructureNumber && (
  <BridgeCard
    setCardLoading={setCardLoading}  // ✅ Passed correctly
    structureNumber={selectedStructureNumber}
    setSelectedStructureNumber={setSelectedStructureNumber}
  />
)}

      </div>
    </div>
  );
};

export default Map9;
