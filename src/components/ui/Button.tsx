import { Wid } from "../../enums";
import { IpropsButton } from "../../interfaces";



export default function Button({
  children,
  className,
  width=Wid.full,
  ...rest
}: IpropsButton) {
  return (
    <button
      className={`${className} ${width} rounded-md text-white p-1 text-lg`}
      {...rest}
    >
      {children}
    </button>
  );
}
