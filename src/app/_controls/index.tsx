import { type FC } from "react";
import { App_ControlsMapTiler } from "~/app/_controls/maptiler";

export const App_Controls: FC = () => {
  return (
    <div className="flex flex-col items-stretch">
      <App_ControlsMapTiler />
    </div>
  );
};
