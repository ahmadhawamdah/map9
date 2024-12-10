import React from "react";
import { Bridge } from "../../typing";
import { transformStructureNum } from "@/utils/structureNum";
import { trimQuotes } from "@/utils/trimQuotes";

interface BridgeListProps {
  bridges: Bridge[];
  setSelectedStructureNumber: (value: string) => void;
}

const BridgeList: React.FC<BridgeListProps> = ({
  bridges,
  setSelectedStructureNumber,
}) => {
  return (
    <div className="p-5 pt-0 h-screen overflow-y-auto min-w-[270px] bg-white shadow-md rounded-md space-y-4 text-black">
      <h2 className="text-xl text-center font-semibold sticky top-0 bg-white z-10 p-5 border-b border-b-gray-500 w-full">
        Bridges List
      </h2>

      {bridges && bridges.length > 0 ? (
        bridges.map((bridge) => (
          <div
            key={bridge.structureNumber}
            onClick={() => setSelectedStructureNumber(bridge.structureNumber)}
            className="border p-2 rounded-md hover:scale-105 transition-all ease-in-out cursor-pointer"
          >
            <h3 className="font-bold">
              Structure {transformStructureNum(bridge.structureNumber)}
            </h3>
            <p>{trimQuotes(bridge.location)}</p>
            <p>Year Built: {bridge.yearBuilt}</p>
          </div>
        ))
      ) : (
        <p className="text-base text-center text-gray-800">
          Adjust filters, and click on <br /> "Apply Filters" to start
        </p>
      )}
    </div>
  );
};

export default BridgeList;
