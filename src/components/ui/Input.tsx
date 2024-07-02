import { IpropsInputModal } from "../../interfaces";

export default function Input({...rest}:IpropsInputModal) {
  return (
      <input
        className="rounded-sm p-1 text-lg bg-gray-100 border-2 focus:outline-none focus:border-gray-500"
        {...rest}
      />
  );
}
