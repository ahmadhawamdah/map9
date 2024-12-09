import * as React from "react";
import { Map, Marker, Popup } from "react-map-gl";
import { Bridge } from "../../typing";
import "mapbox-gl/dist/mapbox-gl.css";
import { convertLatitude, convertLongitude } from "@/utils/geoConversion";
import { useState } from "react";
import { transformStructureNum } from "@/utils/structureNum";
import { trimQuotes } from "@/utils/trimQuotes";

interface BridgeListProps {
  bridges: Bridge[];
}

const Mapbox: React.FC<BridgeListProps> = ({ bridges }) => {
  // Track the structureNumber of the clicked bridge
  const [selectedBridge, setSelectedBridge] = useState<Bridge | null>(null);
  console.log(selectedBridge);
  return (
    <div className="flex h-screen flex-grow w-full p-4 bg-white shadow-md rounded-md">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -79.99,
          latitude: 40.44,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/ahmadhawamdah/cm4g9ldnm008m01ra7osc4t0w"
      >
        {bridges?.map((bridge) => (
          <div key={bridge.structureNumber}>
            <Marker
              longitude={convertLongitude(bridge.long)}
              latitude={convertLatitude(bridge.lat)}
            >
              <p
                className="animate-bounce cursor-pointer text-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBridge(bridge);
                }}
              >
                🌉{" "}
              </p>
            </Marker>

            {selectedBridge?.long === bridge.long ? (
              <Popup
                longitude={convertLongitude(selectedBridge.long)}
                latitude={convertLatitude(selectedBridge.lat)}
                anchor="top"
                onClose={() => setSelectedBridge(null)}
                closeOnClick={true}
              >
                <div className="z-20">
                  <p className=" text-base text-black ">
                    <strong> Structure </strong>{" "}
                    {transformStructureNum(bridge.structureNumber)}
                  </p>
                  <p className="text-xs  text-gray-800">
                    {trimQuotes(bridge.location)}
                  </p>
                  <p className="text-xs text-gray-800">
                    Year Built: {bridge.yearBuilt}
                  </p>
                </div>
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default Mapbox;
