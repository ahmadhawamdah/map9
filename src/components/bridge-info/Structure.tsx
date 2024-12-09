import React from "react";

const Structure = ({ structure }: { structure: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Structure</h3>
      <p className="text-sm">
        Structure Kind: {structure[0].structureKind}
      </p>
      <p className="text-sm">
        Main Unit Spans: {structure[0].mainUnitSpans}
      </p>
      <p className="text-sm">
        Median Code: {structure[0].medianCode}
      </p>
      <p className="text-sm">
        Approach Kind: {structure[0].apprKind}
      </p>
      <p className="text-sm">
        Structure Type: {structure[0].structureType}
      </p>
      <p className="text-sm">
        Approach Type: {structure[0].apprType}
      </p>
      <p className="text-sm">
        Approach Spans: {structure[0].apprSpans}
      </p>
      <p className="text-sm">
        Deck Structure Type: {structure[0].deckStructureType}
      </p>
      <p className="text-sm">
        Railings: {structure[0].railings || "N/A"}
      </p>
      <p className="text-sm">
        Transitions: {structure[0].transitions || "N/A"}
      </p>
      <p className="text-sm">
        Approach Rail: {structure[0].apprRail || "N/A"}
      </p>
      <p className="text-sm">
        Approach Rail End: {structure[0].apprRailEnd || "N/A"}
      </p>
      <p className="text-sm">
        Parallel Structure: {structure[0].parallelStructure}
      </p>
    </section>
  );
};

export default Structure;
