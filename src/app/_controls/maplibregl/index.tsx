import { type FC } from "react";
import { App_ControlsButton } from "~/app/_controls/button";
import { useGeocoder } from "~/hooks/geocoder";
import { resolveObjectEntries } from "~/utils/object";

export const App_ControlsMapLibreGl: FC = () => {
  const g = useGeocoder();
  return (
    <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      {resolveObjectEntries(g["geocoderApi"]).map(([key, asyncHandler]) => {
        return (
          <li key={key} className="mb-2">
            <App_ControlsButton
              onClick={async () => {
                console.log(" LOOKNG ");
                const x = await asyncHandler();

                console.log(key, x);
                console.log(" RESULT ");
              }}
            >
              {key}
            </App_ControlsButton>
          </li>
        );
      })}
    </ul>
  );
};
