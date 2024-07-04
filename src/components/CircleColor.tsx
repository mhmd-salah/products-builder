import { IpropsCircleColor } from "../interfaces";

export default function CircleColor({color}:IpropsCircleColor) {
  return <span className="h-5 w-5 rounded-full cursor-pointer"></span>;
}
