"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "@/ui/DropDown";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  // Options for the dropdown
  const dashboardOptions = ["Bridge Dashboard", "Condition Dashboard"];

  // State to track the currently selected dashboard
  const [selectedDashboard, setSelectedDashboard] = useState<string>("Bridge Dashboard");

  // Handle dropdown selection
  const handleDashboardChange = (selectedOption: string) => {
    setSelectedDashboard(selectedOption); // Update the dashboard name
    if (selectedOption === "Bridge Dashboard") {
      router.push("/bridge");
    } else if (selectedOption === "Condition Dashboard") {
      router.push("/condition");
    }
  };

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 z-20">
      <div className="mt-5">
        <div className="container mx-auto flex justify-between items-center">

          <h1 className="text-3xl font-bold  text-black">{selectedDashboard}</h1>

          {/* Dropdown Component */}
          <Dropdown
            options={dashboardOptions}
            selected={selectedDashboard} // Use selectedDashboard as the current selection
            onSelect={handleDashboardChange}
          />
        </div>
      </div>
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;