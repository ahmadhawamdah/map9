import React from "react";

const Geometry = ({ geometry }: { geometry: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Geometry</h3>
      <p>
        <span className="font-bold">Structure Length:</span>{" "}
        {geometry[0].structureLength}m
      </p>
      <p>
        <span className="font-bold">Deck Width:</span> {geometry[0].deckWidth}m
      </p>
      <p>
        <span className="font-bold">Roadway Width:</span>{" "}
        {geometry[0].roadwayWidth}m
      </p>
      <p>
        <span className="font-bold">Min Vertical Clearance:</span>{" "}
        {geometry[0].minVertClearance}m
      </p>
      <p>
        <span className="font-bold">Approach Width:</span>{" "}
        {geometry[0].apprWidth}m
      </p>
      <p>
        <span className="font-bold">Structure Flared:</span>{" "}
        {geometry[0].structureFlared ? "Yes" : "No"}
      </p>
      <p>
        <span className="font-bold">Navigation Vertical Clearance:</span>{" "}
        {geometry[0].navVertClearance}m
      </p>
      <p>
        <span className="font-bold">Navigation Horizontal Clearance:</span>{" "}
        {geometry[0].navHorrClearance}m
      </p>
      <p>
        <span className="font-bold">Left Curb Width:</span>{" "}
        {geometry[0].leftCurbWidth}m
      </p>
      <p>
        <span className="font-bold">Right Curb Width:</span>{" "}
        {geometry[0].rightCurbWidth}m
      </p>
      <p>
        <span className="font-bold">Deck Area:</span> {geometry[0].deckArea}m²
      </p>
    </section>
  );
};

export default Geometry;
