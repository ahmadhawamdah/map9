import React from "react";

const Structure = ({ structure }: { structure: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Structure</h3>
      <p>
        <span className="font-bold">Structure Kind:</span>{" "}
        {structure[0].structureKind}
      </p>
      <p>
        <span className="font-bold">Main Unit Spans:</span>{" "}
        {structure[0].mainUnitSpans}
      </p>
      <p>
        <span className="font-bold">Median Code:</span> {structure[0].medianCode}
      </p>
      <p>
        <span className="font-bold">Approach Kind:</span>{" "}
        {structure[0].apprKind}
      </p>
      <p>
        <span className="font-bold">Structure Type:</span>{" "}
        {structure[0].structureType}
      </p>
      <p>
        <span className="font-bold">Approach Type:</span>{" "}
        {structure[0].apprType}
      </p>
      <p>
        <span className="font-bold">Approach Spans:</span>{" "}
        {structure[0].apprSpans}
      </p>
      <p>
        <span className="font-bold">Deck Structure Type:</span>{" "}
        {structure[0].deckStructureType}
      </p>
      <p>
        <span className="font-bold">Railings:</span>{" "}
        {structure[0].railings || "N/A"}
      </p>
      <p>
        <span className="font-bold">Transitions:</span>{" "}
        {structure[0].transitions || "N/A"}
      </p>
      <p>
        <span className="font-bold">Approach Rail:</span>{" "}
        {structure[0].apprRail || "N/A"}
      </p>
      <p>
        <span className="font-bold">Approach Rail End:</span>{" "}
        {structure[0].apprRailEnd || "N/A"}
      </p>
      <p>
        <span className="font-bold">Parallel Structure:</span>{" "}
        {structure[0].parallelStructure}
      </p>
    </section>
  );
};

export default Structure;
