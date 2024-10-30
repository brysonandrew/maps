"use client";
import type { FC } from "react";
import { Map } from '@vis.gl/react-maplibre';
import { MIDDLE_OF_USA } from "~/constants/map";

export const ComponentsMap: FC = () => {
  return (
    <Map
      initialViewState={{
        longitude: MIDDLE_OF_USA[0],
        latitude: MIDDLE_OF_USA[1],
        zoom: 2,
      }}
      mapStyle="/styles/dark.json"
      // mapStyle="https://tiles.openfreemap.org/styles/liberty"
    />
  );
};
