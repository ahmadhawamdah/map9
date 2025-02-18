"use client";

import Loading from "@/ui/Loading";
import { transformStructureNum } from "@/utils/structureNum";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Condition from "./Condition";
import Maintenance from "./Maintenance";
import Geometry from "./Geometry";
import Structure from "./Structure";
import { trimQuotes } from "@/utils/trimQuotes";
import { convertLatitude, convertLongitude } from "@/utils/geoConversion";
import { highwayMap, historicStatusMap, serviceMap } from "../NBIHashmaps";

interface BridgeCardProps {
  structureNumber: string; // The selected structure number
  setSelectedStructureNumber: (value: string | null) => void;
}

const BridgeCard: React.FC<BridgeCardProps> = ({
  structureNumber,
  setSelectedStructureNumber,
}) => {
  const [bridgeData, setBridgeData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!structureNumber) return;

    const fetchBridgeData = async () => {
      setLoading(true);
      setError(null);
      structureNumber = structureNumber.toString();
      try {
        const res = await fetch(`/api/bridge-info/${structureNumber}`);
        if (!res.ok) {
          throw new Error("Failed to fetch bridge details");
        }

        const data = await res.json();
        setBridgeData(data);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBridgeData();
  }, [structureNumber]);

  if (!structureNumber) {
    return (
      <div className="p-6 bg-white shadow-md rounded-md">
        Select a bridge to view details.
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="p-6 bg-white shadow-md rounded-md text-red-500">
        {error}
      </div>
    );
  }

  if (!bridgeData) {
    return (
      <div className="p-6 bg-white shadow-md rounded-md">
        No data available for this bridge.
      </div>
    );
  }

  const {
    navigation,
    conditon,
    maintenance,
    geometry,
    structure,
    history,
    serviceOn,
    routePrefix,
    fedAgency,
    ...bridge
  } = bridgeData;

  return (
    <div className="overscroll-contain p-6 min-w-[270px] w-screen sm:w-1/2 h-screen overflow-y-auto bg-white shadow-md rounded-md text-black fixed bottom-0 left-0 z-20 sm:static sm:bottom-auto sm:left-auto">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Bridge Details</h2>
        <button
          onClick={() => setSelectedStructureNumber(null)}
          className="p-2 font-bold rounded-full bg-yellow-400 text-white hover:bg-red-600 transition-transform transform hover:scale-110 shadow-md w-10"
          aria-label="Close"
        >
          ✖
        </button>
      </div>
      {/* <ThreeDHighway /> */}
      <div className="grid">
        <section>
          <p className="text-sm">
            Structure Number: {transformStructureNum(bridge.structureNumber)}
          </p>
          <p className="text-sm">Location: {trimQuotes(bridge.location)}</p>
          <p className="text-sm">Year Built: {bridge.yearBuilt}</p>
          <p className="text-sm">
            Year Reconstructed: {bridge.yearReconstructed || "N/A"}
          </p>
          <p className="text-sm">Latitude: {convertLatitude(bridge.lat)}</p>
          <p className="text-sm">Longitude: {convertLongitude(bridge.long)}</p>
          <p className="text-sm">Route Prefix: {highwayMap[routePrefix]}</p>
          <p className="text-sm">Federal Agency: {fedAgency}</p>
          <p className="text-sm">Service On: {serviceMap[serviceOn]}</p>
          <p className="text-sm">History: {historicStatusMap[history]}</p>
        </section>

        {navigation && navigation.length > 0 && (
          <Navigation navigation={navigation} />
        )}
        {conditon && conditon.length > 0 && <Condition condition={conditon} />}
        {maintenance && maintenance.length > 0 && (
          <Maintenance maintenance={maintenance} />
        )}
        {geometry && geometry.length > 0 && <Geometry geometry={geometry} />}
        {structure && structure.length > 0 && (
          <Structure structure={structure} />
        )}
      </div>
    </div>
  );
};

export default BridgeCard;
