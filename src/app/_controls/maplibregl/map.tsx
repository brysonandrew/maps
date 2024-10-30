import { useState, type FC } from "react";
import maplibregl from "maplibre-gl";
import { useGeocoder } from "~/hooks/geocoder";

export const App_ControlsMapLibreGlMap: FC = () => {
  const g = useGeocoder();
  const [map, setMap] = useState<null | maplibregl.Map>(null);
  return (
    <div className="flex flex-col items-stretch">
      <div
        className="w-[200px] h-[200px] bg-red"
        ref={(instance) => {
          if (instance && !map) {
            const next = new maplibregl.Map({
              container: instance, // id of HTML container element
            });
            if (next !== null) {
              setMap(next);
              next.addControl(g);
            }
          }
        }}
      ></div>
    </div>
  );
};
