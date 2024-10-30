import {
  CarmenGeojsonFeature,
  MaplibreGeocoderApi,
  MaplibreGeocoderFeatureResults,
} from "@maplibre/maplibre-gl-geocoder";

export const GEOCODER_API: MaplibreGeocoderApi = {
  forwardGeocode: async (config) => {
    const features: CarmenGeojsonFeature[] = [];
    try {
      const request = `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`;
      const response = await fetch(request);
      const geojson = await response.json();
      for (const feature of geojson.features) {
        const coordinates: [number, number] = [
          feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
        ];
        const point: CarmenGeojsonFeature = {
          id: "",
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates,
          },
          place_name: feature.properties.display_name,
          properties: feature.properties,
          text: feature.properties.display_name,
          place_type: ["place"],
          // center,
        };
        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to forwardGeocode with error: ${e}`);
    }

    return {
      type: "FeatureCollection",
      features,
    };
  },
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
};
