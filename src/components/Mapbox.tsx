import * as React from "react";
import { Map, Marker, Popup, ViewStateChangeEvent } from "react-map-gl";
import { Bridge, ViewportState } from "../../typing";
import "mapbox-gl/dist/mapbox-gl.css";
import { convertLatitude, convertLongitude } from "@/utils/geoConversion";
import { useCallback, useState } from "react";
import { transformStructureNum } from "@/utils/structureNum";
import { trimQuotes } from "@/utils/trimQuotes";


interface MapboxProps {
  bridges: Bridge[];
  viewport: ViewportState;
  setViewport: React.Dispatch<React.SetStateAction<ViewportState>>;
}

const Mapbox: React.FC<MapboxProps> = ({ bridges, viewport, setViewport }) => {
  const [selectedBridge, setSelectedBridge] = useState<Bridge | null>(null);

  const handleMoveEnd = useCallback((event: ViewStateChangeEvent) => {
    const map = event.target;
  
    if (typeof map.getBounds !== "function") return;
  
    const bounds = map.getBounds();
    if (!bounds) return;
  
    setViewport((prev) => ({
      ...prev,
      bounds: bounds
        ? [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
        : prev.bounds, // Keep previous bounds if map.getBounds() fails
    }));
  }, [setViewport]);

  return (
    <div className="hidden sm:flex h-screen flex-grow w-full p-4 bg-white shadow-md rounded-md">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: viewport.longitude,
          latitude: viewport.latitude,
          zoom: viewport.zoom,
        }}
        onMoveEnd={handleMoveEnd}
        mapStyle="mapbox://styles/ahmadhawamdah/cm4g9ldnm008m01ra7osc4t0w"
      >
        {bridges.map((bridge) => (
          <div key={bridge.structureNumber}>
            <Marker longitude={convertLongitude(bridge.long)} latitude={convertLatitude(bridge.lat)}>
              <p
                className="cursor-pointer text-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBridge(bridge);
                }}
              >
                🌉
              </p>
            </Marker>

            {selectedBridge?.long === bridge.long && (
              <Popup
                longitude={convertLongitude(selectedBridge.long)}
                latitude={convertLatitude(selectedBridge.lat)}
                anchor="top"
                onClose={() => setSelectedBridge(null)}
                closeOnClick={true}
              >
                <div className="z-20">
                  <p className="text-base text-black">
                    <strong> Structure </strong> {transformStructureNum(bridge.structureNumber)}
                  </p>
                  <p className="text-xs text-gray-800">{trimQuotes(bridge.location)}</p>
                  <p className="text-xs text-gray-800">Year Built: {bridge.yearBuilt}</p>
                </div>
              </Popup>
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default Mapbox;
