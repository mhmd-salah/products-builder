import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { Wid } from "../enums";

export interface IpropsProductCard{
  product:IProduct;
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
  price: number;
  category: string;
  imgURL?: string;
  colors: string[];
}

export interface IPropsModle {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children:ReactNode
}

export interface IformatInputs{
  id:string
  name:string
  label:string
  type:string
}
export interface IpropsInputModal extends InputHTMLAttributes<HTMLInputElement> {
  
}