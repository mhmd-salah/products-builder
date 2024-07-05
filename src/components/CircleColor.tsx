import { IpropsCircleColor } from "../interfaces";

export default function CircleColor({ color ,...rest}: IpropsCircleColor) {
  return (
    <span
      className="block h-5 w-5 rounded-full cursor-pointer"
      style={{ background: color }}
      {...rest}
    ></span>
  );
}
