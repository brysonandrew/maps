import { useState, type FC } from "react";
import { useGeocoderMapTiler } from "~/hooks/geocoder/maptiler";
import { GeocodingControl } from "@maptiler/geocoding-control/react";

// const gc = new GeocodingControl({
//   collapsed: true,
//   country: 'de',
//   limit: 10
// });

export const App_ControlsMapTiler: FC = () => {
  const [API_KEY] = useState(process.env.NEXT_PUBLIC_MAPTILER_API_KEY);
  const [mapController, setMapController] = useState();
  const gc = useGeocoderMapTiler();
  console.log(
    "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
  );
  console.log(
    "██████████████▓▒░ 🧨 ░▒ line: 12, file: index.tsx ▓▒░ 🧨 ░▒██████████████"
  );
  console.log(API_KEY);
  if (!API_KEY) return null;
  return (
    <div className="flex flex-col items-stretch">
      <h4>Map tiler</h4>
      <GeocodingControl apiKey={API_KEY} />
    </div>
  );
};
