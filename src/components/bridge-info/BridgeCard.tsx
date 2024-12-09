"use client";

import Loading from "@/ui/Loading";
import { transformStructureNum } from "@/utils/structureNum";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Condition from "./Condition";
import Maintenance from "./Maintenance";
import Geometry from "./Geometry";
import Structure from "./Structure";

interface BridgeCardProps {
  structureNumber: string | null; // The selected structure number
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
    if (!structureNumber) 
      return;

    const fetchBridgeData = async () => {
      setLoading(true);
      setError(null);

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
    <div className="w-full overscroll-contain h-full bg-opacity-50 backdrop-blur-md overflow-y-scroll overflow-x-hidden fixed left-0 top-0 p-6 bg-white shadow-md rounded-md text-black z-40">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Bridge Details</h2>
        <button
          onClick={() => setSelectedStructureNumber(null)}
          className="p-2 font-bold border-2 rounded-xl hover:scale-110 transition cursor-pointer ease-in-out"
        >
          x
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <section>
          <h3 className="text-lg font-semibold">General Information</h3>
          <p>
            <span className="font-bold">Structure Number:</span>{" "}
            {transformStructureNum(bridge.structureNumber)}
          </p>
          <p>
            <span className="font-bold">Location:</span> {bridge.location}
          </p>
          <p>
            <span className="font-bold">Year Built:</span> {bridge.yearBuilt}
          </p>
          <p>
            <span className="font-bold">Year Reconstructed:</span>{" "}
            {bridge.yearReconstructed || "N/A"}
          </p>
          <p>
            <span className="font-bold">Latitude:</span> {bridge.lat}
          </p>
          <p>
            <span className="font-bold">Longitude:</span> {bridge.long}
          </p>
          <p>
            <span className="font-bold">Route Prefix:</span> {routePrefix}
          </p>
          <p>
            <span className="font-bold">Federal Agency:</span> {fedAgency}
          </p>
          <p>
            <span className="font-bold">Service On:</span> {serviceOn}
          </p>
          <p>
            <span className="font-bold">History:</span> {history}
          </p>
        </section>
        {navigation && <Navigation navigation={navigation} />}
        {conditon && <Condition condition={conditon} />}
        {maintenance && <Maintenance maintenance={maintenance} />}
        {geometry && <Geometry geometry={geometry} />}
        {structure && <Structure structure={structure} />}
      </div>
    </div>
  );
};

export default BridgeCard;
