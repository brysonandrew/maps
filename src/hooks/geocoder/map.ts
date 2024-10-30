import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import maplibregl from "maplibre-gl";
import { GEOCODER_API } from "~/hooks/geocoder/_constants";

export const useMap = () => {
  /* eslint-disable camelcase */
  const map = new maplibregl.Map({
    container: "map",
    // Use a minimalist raster style
    style: {
      version: 8,
      name: "Blank",
      center: [0, 0],
      zoom: 0,
      sources: {
        "raster-tiles": {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          minzoom: 0,
          maxzoom: 19,
        },
      },
      layers: [
        {
          id: "background",
          type: "background",
          paint: {
            "background-color": "#e0dfdf",
          },
        },
        {
          id: "simple-tiles",
          type: "raster",
          source: "raster-tiles",
        },
      ],
      //   id: "blank",
    },
    center: [-87.61694, 41.86625],
    zoom: 15.99,
    pitch: 40,
    bearing: 20,
    antialias: true,
  });

  map.addControl(
    new MaplibreGeocoder(GEOCODER_API, {
      maplibregl,
    })
  );
};
