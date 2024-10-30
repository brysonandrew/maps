import * as maptilersdk from "@maptiler/sdk";
// import * as maptilergcc from "@maptiler/geocoding-control";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";

// console.log(maptilersdk);
// const GeolocateControl = maptilersdk.GeolocateControl;

export const useGeocoderMapTiler = () => {
  const gc = new GeocodingControl({
    collapsed: true,
    country: "de",
    limit: 10,
  });
  console.log(gc)
  return gc;
};
