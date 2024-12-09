import React from "react";

const Maintenance = ({ maintenance }: { maintenance: any }) => {
  return (
    
    <section>
      <h3 className="text-lg font-semibold">Maintenance</h3>
      <p>
        <span className="font-bold">Maintenance Type:</span>{" "}
        {maintenance[0].maintenanceType}
      </p>
      <p>
        <span className="font-bold">Bridge Improvement:</span>{" "}
        {maintenance[0].bridgeImprovement || "N/A"}
      </p>
      <p>
        <span className="font-bold">Roadway Improvement:</span>{" "}
        {maintenance[0].roadwayImprovement || "N/A"}
      </p>
      <p>
        <span className="font-bold">Total Improvement:</span>{" "}
        {maintenance[0].totalImprovement || "N/A"}
      </p>
      <p>
        <span className="font-bold">Year of Improvement:</span>{" "}
        {maintenance[0].yearOfImprovement || "N/A"}
      </p>
      <p>
        <span className="font-bold">Work Proposed:</span>{" "}
        {maintenance[0].workProposed || "N/A"}
      </p>
      <p>
        <span className="font-bold">Inspection Frequency:</span>{" "}
        {maintenance[0].inspectionFrequency}
      </p>
      <p>
        <span className="font-bold">Fracture Critical:</span>{" "}
        {maintenance[0].fractureCritical || "N/A"}
      </p>
      <p>
        <span className="font-bold">Open/Closed/Posted:</span>{" "}
        {maintenance[0].openClosedPosted}
      </p>
    </section>
  );
};

export default Maintenance;
