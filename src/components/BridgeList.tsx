import React, { useState } from "react";
import { Bridge } from "../../typing";
import { transformStructureNum } from "@/utils/structureNum";
import { trimQuotes } from "@/utils/trimQuotes";

interface BridgeListProps {
  bridges: Bridge[];
  cardLoading: boolean;
  setSelectedStructureNumber: (value: string) => void;
}

const BridgeList: React.FC<BridgeListProps> = ({
  bridges,
  cardLoading,
  setSelectedStructureNumber,
}) => {
  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  const handleItemClick = (structureNumber: string) => {
    setLoadingItem(structureNumber);
    setSelectedStructureNumber(structureNumber);
  };

  // Reset loading state when `cardLoading` is done
  React.useEffect(() => {
    if (!cardLoading) {
      setLoadingItem(null);
    }
  }, [cardLoading]);

  return (
    <div className="p-5 pt-0 h-screen overflow-y-auto min-w-[270px] bg-white shadow-md rounded-md space-y-4 text-black">
      <h2 className="text-xl text-center font-semibold sticky top-0 bg-white z-10 p-5 border-b border-b-gray-500 w-full">
        Bridges List
      </h2>

      {bridges && bridges.length > 0 ? (
        bridges.map((bridge) => (
          <div
            key={bridge.structureNumber}
            onClick={() => handleItemClick(bridge.structureNumber)}
            className="border p-2 rounded-md min-h-28 hover:scale-105 transition-all ease-in-out cursor-pointer flex flex-col items-center"
          >
            {cardLoading && loadingItem === bridge.structureNumber ? (
              <div className="p-2 flex items-center justify-center h-24">
                <p className="flex items-center justify-center">Loading ....</p>
              </div>
            ) : (
              <>
                <h3 className="font-bold">
                  Structure {transformStructureNum(bridge.structureNumber)}
                </h3>
                <p>{trimQuotes(bridge.location)}</p>
                <p>Year Built: {bridge.yearBuilt}</p>
              </>
            )}
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
