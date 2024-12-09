import React from "react";

const Geometry = ({ geometry }: { geometry: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Geometry</h3>
      <p className="text-sm">
        Structure Length: {geometry[0].structureLength}m
      </p>
      <p className="text-sm">
        Deck Width: {geometry[0].deckWidth}m
      </p>
      <p className="text-sm">
        Roadway Width: {geometry[0].roadwayWidth}m
      </p>
      <p className="text-sm">
        Min Vertical Clearance: {geometry[0].minVertClearance}m
      </p>
      <p className="text-sm">
        Approach Width: {geometry[0].apprWidth}m
      </p>
      <p className="text-sm">
        Structure Flared: {geometry[0].structureFlared ? "Yes" : "No"}
      </p>
      <p className="text-sm">
        Navigation Vertical Clearance: {geometry[0].navVertClearance}m
      </p>
      <p className="text-sm">
        Navigation Horizontal Clearance: {geometry[0].navHorrClearance}m
      </p>
      <p className="text-sm">
        Left Curb Width: {geometry[0].leftCurbWidth}m
      </p>
      <p className="text-sm">
        Right Curb Width: {geometry[0].rightCurbWidth}m
      </p>
      <p className="text-sm">
        Deck Area: {geometry[0].deckArea}m²
      </p>
    </section>
  );
};

export default Geometry;
