import maplibregl from "maplibre-gl";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import { GEOCODER_API } from "~/hooks/geocoder/_constants";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";

export const useGeocoder = (container?: HTMLElement|null) => {
  // Functions should return Carmen GeoJSON, see the relevant type in this project
  // View config definitions in our [documentation](https://www.maplibre.org/maplibre-gl-geocoder/)
  // console.log(maplibregl, MaplibreGeocoder, GEOCODER_API)
  // Pass in or define a geocoding API that matches the above
  const geocoder = new MaplibreGeocoder(GEOCODER_API, {
    maplibregl,
  });
  console.log(
    "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
  );
  console.dir(geocoder);
  console.log(
    "██████████████▓▒░ 🧨 ░▒ line: 75, file: geocoder.ts ▓▒░ 🧨 ░▒██████████████"
  );


  return geocoder;
};
