import { MIDDLE_OF_USA } from "~/constants/map";
import { TLocationResponse } from "~/hooks/geocoder/ip/types";

export const useGeocoderIp = () => {
  const handler = async () => {
    try {
      const response = await fetch("http://ip-api.com/json/");
      const json = (await response.json()) as TLocationResponse;
      console.log(json);
      if (typeof json.lat === "number" && typeof json.lon === "number") {
        return [json.lon, json.lat];
      }
    } catch (error) {
      console.error(error);
    }
    return MIDDLE_OF_USA;
  };

  return handler;
};
