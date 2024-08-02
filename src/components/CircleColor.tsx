/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { IpropsCircleColor } from "../interfaces";

function CircleColor({ color ,...rest}: IpropsCircleColor) {
  return (
    <span
      className="block h-5 w-5 rounded-full cursor-pointer"
      style={{ background: color }}
      {...rest}
    ></span>
  );
}
export default memo(CircleColor)