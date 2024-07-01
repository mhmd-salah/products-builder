import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: Wid;
}
export enum Wid {
  full="w-full",
  fit= "w-fit"
}
export default function Button({
  children,
  className,
  width=Wid.full,
  ...rest
}: Iprops) {
  return (
    <button
      className={`${className} ${width} rounded-md text-white p-1 text-lg`}
      {...rest}
    >
      {children}
    </button>
  );
}
