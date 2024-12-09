import React from "react";

const Navigation = ({ navigation }: { navigation: any }) => {
  return (
<section>
  <h3 className="text-lg font-semibold">Navigation</h3>
  <p>
    <span className="font-bold">Direction:</span> {navigation[0].direction}
  </p>
  <p>
    <span className="font-bold">Traffic Lanes On:</span> {navigation[0].trafficLanesOn}
  </p>
  <p>
    <span className="font-bold">Traffic Lanes Under:</span> {navigation[0].trafficLanesUnd || "N/A"}
  </p>
  <p>
    <span className="font-bold">Traffic Direction:</span> {navigation[0].trafficDirection}
  </p>
  <p>
    <span className="font-bold">Navigation:</span> {navigation[0].navigation || "N/A"}
  </p>
  <p>
    <span className="font-bold">Toll:</span> {navigation[0].toll ? "Yes" : "No"}
  </p>
  <p>
    <span className="font-bold">Functional Class:</span> {navigation[0].functionalClass}
  </p>
  <p>
    <span className="font-bold">Detour Kilos:</span> {navigation[0].detourKilos || "N/A"}
  </p>
  <p>
    <span className="font-bold">Kilopoint:</span> {navigation[0].kilopoint || "N/A"}
  </p>
  <p>
    <span className="font-bold">ADT (Average Daily Traffic):</span> {navigation[0].adt}
  </p>
  <p>
    <span className="font-bold">Percent ADT Truck:</span> {navigation[0].percentAdtTruck || "N/A"}%
  </p>
  <p>
    <span className="font-bold">Year ADT:</span> {navigation[0].yearAdt}
  </p>
  <p>
    <span className="font-bold">Future ADT:</span> {navigation[0].futureAdt}
  </p>
  <p>
    <span className="font-bold">Year of Future ADT:</span> {navigation[0].yearOfFutureAdt}
  </p>
</section>

  );
};

export default Navigation;
