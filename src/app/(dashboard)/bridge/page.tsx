"use client";

import React, { useState } from "react";
import Map9 from "@/components/Map9";
import { FilterBridgesParams } from "../../../../typing";

const BridgeDashboard: React.FC = () => {
  const [bridgeFilterParams, setBridgeFilterParams] = useState<FilterBridgesParams>({
    stateCode: "",
    yearBuilt: { min: 1967, max: 2024 },
    functionalClass: { min: 0, max: 20 },
    designLoad: "",
  });

  const handleFilterChange = (key: string, value: any) => {
    setBridgeFilterParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <Map9
        type="bridge"
        filterParams={bridgeFilterParams}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default BridgeDashboard;
