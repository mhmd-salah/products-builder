/* eslint-disable react-refresh/only-export-components */
import { forwardRef, memo, Ref } from "react";
import { IpropsInputModal } from "../../interfaces";

const Input = forwardRef(({ ...rest }: IpropsInputModal,ref:Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      className="rounded-sm p-1 text-lg bg-gray-100 border-2 focus:outline-none focus:border-gray-500"
      {...rest}
    />
  );
});
export default memo(Input)