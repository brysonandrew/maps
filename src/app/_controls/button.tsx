import type { FC, HTMLAttributes } from "react";

export const App_ControlsButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className="underline" {...props}>
      {children}
    </button>
  );
};
