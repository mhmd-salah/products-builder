import { IpropsErrorMessage } from "../interfaces";

export default function ErrorMessage({msg}:IpropsErrorMessage) {
  return (
    msg&&<span className="block text-red-500 font-semibold text-sm">{msg}</span>
  )
}
