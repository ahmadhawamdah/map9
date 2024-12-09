import React from "react";
import { bridgeStatusMap, maintenanceAgencyMap, workProposedMap } from "../NBIHashmaps";

const Maintenance = ({ maintenance }: { maintenance: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Maintenance</h3>
      <p className="text-sm">
        Maintenance Agency: {maintenanceAgencyMap[maintenance[0].maintenanceType]}
      </p>
      <p className="text-sm">
        Bridge Improvement: {"$" +maintenance[0].bridgeImprovement || "N/A"}
      </p>
      <p className="text-sm">
        Roadway Improvement: {"$" + maintenance[0].roadwayImprovement || "N/A"}
      </p>
      <p className="text-sm">
        Total Improvement: {"$" + maintenance[0].totalImprovement || "N/A"}
      </p>
      <p className="text-sm">
        Year of Improvement: {maintenance[0].yearOfImprovement || "N/A"}
      </p>
      <p className="text-sm">
        Work Proposed: {workProposedMap[maintenance[0].workProposed] || "N/A"}
      </p>
      <p className="text-sm">
        Inspection Frequency: {maintenance[0].inspectionFrequency}
      </p>
      <p className="text-sm">
        Fracture Critical: {maintenance[0].fractureCritical || "N/A"}
      </p>
      <p className="text-sm">
        Open/Closed/Posted: {bridgeStatusMap[maintenance[0].openClosedPosted]}
      </p>
    </section>
  );
};

export default Maintenance;
