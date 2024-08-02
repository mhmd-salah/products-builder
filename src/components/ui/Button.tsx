/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Wid } from "../../enums";
import { IpropsButton } from "../../interfaces";



function Button({
  children,
  className,
  width=Wid.full,
  ...rest
}: IpropsButton) {
  return (
    <button
      className={`${className} ${width} rounded-md p-1 text-lg`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default memo(Button)