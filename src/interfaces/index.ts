import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { Wid } from "../enums";

export interface IpropsProductCard {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditM:()=>void;
}

export interface IpropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: Wid;
}
export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: string;
  category: {
    name: string;
    imgURL: string;
  };
  imgURL: string;
  colors: string[];
}

export interface IPropsModle {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children:ReactNode
}

export interface IformatInputs {
  id: string;
  name: "title" | "description" | "price" | "imgURL";
  label: string;
  type: string;
}
export interface IpropsInputModal extends InputHTMLAttributes<HTMLInputElement> {}

export interface IpropsErrorMessage{
  msg:string
}

export interface IpropsCircleColor extends HTMLAttributes<HTMLSpanElement>{
  color:string
}
export interface Icategory{
  id:number
  name:string
  imgURL:string
}