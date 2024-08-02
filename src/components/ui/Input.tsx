/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { IpropsInputModal } from "../../interfaces";

 function Input({...rest}:IpropsInputModal) {
  return (
      <input
        className="rounded-sm p-1 text-lg bg-gray-100 border-2 focus:outline-none focus:border-gray-500"
        {...rest}
      />
  );
}
export default memo(Input)