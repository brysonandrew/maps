import maplibregl from "maplibre-gl";
import MaplibreGeocoder, {
  CarmenGeojsonFeature,
  MaplibreGeocoderApi,
  MaplibreGeocoderFeatureResults,
  MaplibreGeocoderSuggestionResults,
} from "@maplibre/maplibre-gl-geocoder";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
type TSuggestion = {
  text: string;
  placeId?: string;
};
export const useGeocoder = () => {
  // Functions should return Carmen GeoJSON, see the relevant type in this project
  // View config definitions in our [documentation](https://www.maplibre.org/maplibre-gl-geocoder/)
  const Geo: MaplibreGeocoderApi = {
    // required
    forwardGeocode: async (config) => {
      console.log(
        "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
      );
      console.dir(config);
      console.log(
        "██████████████▓▒░ 🧨 ░▒ line: 14, file: geocoder.ts ▓▒░ 🧨 ░▒██████████████"
      );
      const features: CarmenGeojsonFeature[] = [];
      const feature: MaplibreGeocoderFeatureResults = {
        type: "FeatureCollection",
        features,
      };
      return feature;
    },
    // optional
    reverseGeocode: async (config) => {
      console.log(
        "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
      );
      console.dir(config);
      console.log(
        "██████████████▓▒░ 🧨 ░▒ line: 28, file: geocoder.ts ▓▒░ 🧨 ░▒██████████████"
      );
      const features: CarmenGeojsonFeature[] = [];
      const feature: MaplibreGeocoderFeatureResults = {
        type: "FeatureCollection",
        features,
      };
      return feature;
    }, // reverse geocoding API
    getSuggestions: async (config) => {
      console.log(
        "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
      );
      console.dir(config);
      console.log(
        "██████████████▓▒░ 🧨 ░▒ line: 44, file: geocoder.ts ▓▒░ 🧨 ░▒██████████████"
      );
      const suggestions: TSuggestion[] = [];
      const result: MaplibreGeocoderSuggestionResults = {
        suggestions,
      };
      return result;
    }, // suggestion API
    // searchByPlaceId: console.log // search by Place ID API

    // // required
    // forwardGeocode: async (config) => { /* definition here */ },

    // // optional
    // reverseGeocode: async (config) => { /* definition here */ }, // reverse geocoding API
    // getSuggestions: async (config) => { /* definition here */ }, // suggestion API
    // searchByPlaceId: async (config) => { /* definition here */ } // search by Place ID API
  };

  // Pass in or define a geocoding API that matches the above
  const geocoder = new MaplibreGeocoder(Geo, { maplibregl: maplibregl });
  console.log(
    "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
  );
  console.dir(geocoder);
  console.log(
    "██████████████▓▒░ 🧨 ░▒ line: 75, file: geocoder.ts ▓▒░ 🧨 ░▒██████████████"
  );
  // map.addControl(geocoder);
};
