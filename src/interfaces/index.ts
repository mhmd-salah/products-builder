import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { Wid } from "../enums";
import { ProductName } from "../types";

export interface IpropsProductCard {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditM: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
  setIsOpenConfirmM: (val:boolean)=>void;
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
  name: ProductName;
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
export interface IconfirmModal {
  isOpenConfirmM: boolean;
  setIsOpenConfirmM: (val: boolean) => void;
  children:ReactNode
}