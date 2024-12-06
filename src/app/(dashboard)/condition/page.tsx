"use client";

import React, { useState } from "react";
import Map9 from "@/components/Map9";
import { FilterConditionsParams } from "../../../../typing";

const ConditionDashboard: React.FC = () => {
  const [conditionFilterParams, setConditionFilterParams] = useState<FilterConditionsParams>({
    deckCondition: "",
    superstructureCondition: "",
    culvertCondition: "",
    structuralEval: "",
    bridgeCondition: "",
    lowestRating: { min: 0, max: 10 },
  });

  const handleFilterChange = (key: string, value: any) => {
    setConditionFilterParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <Map9
        type="condition"
        filterParams={conditionFilterParams}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default ConditionDashboard;
