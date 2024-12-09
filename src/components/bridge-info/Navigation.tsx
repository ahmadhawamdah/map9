import React from "react";
import { directionMap, functionalClassificationMap, tollMap } from "../NBIHashmaps";

const Navigation = ({ navigation }: { navigation: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Navigation</h3>
      <p className="text-sm">Direction: {directionMap[navigation[0].direction]}</p>
      <p className="text-sm">Traffic Lanes On: {navigation[0].trafficLanesOn}</p>
      <p className="text-sm">Traffic Lanes Under: {navigation[0].trafficLanesUnd || "N/A"}</p>
      <p className="text-sm">Traffic Direction: {navigation[0].trafficDirection}</p>
      <p className="text-sm">Navigation: {navigation[0].navigation || "N/A"}</p>
      <p className="text-sm">Toll: {tollMap[navigation[0].toll] ? "Yes" : "No"}</p>
      <p className="text-sm">Functional Class: {functionalClassificationMap[navigation[0].functionalClass]}</p>
      <p className="text-sm">Detour: {navigation[0].detourKilos || "N/A"} kilos</p>
      <p className="text-sm">Kilopoint: {navigation[0].kilopoint || "N/A"}</p>
      <p className="text-sm">ADT (Average Daily Traffic): {navigation[0].adt}</p>
      <p className="text-sm">
        Percent ADT Truck: {navigation[0].percentAdtTruck || "N/A"}%
      </p>
      <p className="text-sm">Year ADT: {navigation[0].yearAdt}</p>
      <p className="text-sm">Future ADT: {navigation[0].futureAdt}</p>
      <p className="text-sm">Year of Future ADT: {navigation[0].yearOfFutureAdt}</p>
    </section>
  );
};

export default Navigation;
