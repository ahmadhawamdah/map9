import React from "react";
import { Bridge } from "../../typing"; // Ensure correct path to typing file
import { transformStructureNum } from "@/utils/structureNum";
import { trimQuotes } from "@/utils/trimQuotes";
interface BridgeListProps {
  bridges: Bridge[];
}

const BridgeList: React.FC<BridgeListProps> = ({ bridges }) => {

  return (
    <div className="p-4 bg-white shadow-md rounded-md space-y-4 text-black">
      <h2 className="text-xl font-semibold">Bridges List</h2>
      {bridges.map((bridge) => (
        <div key={bridge.structureNumber} className="border p-2 rounded-md  hover:scale-105 transition-all ease-in-out cursor-pointer">
          <h3 className="font-bold">Structure {transformStructureNum(bridge.structureNumber)}</h3>
          <p>{trimQuotes(bridge.location)}</p>
          <p>Year Built: {bridge.yearBuilt}</p>
        </div>
      ))}
    </div>
  );
};

export default BridgeList;
