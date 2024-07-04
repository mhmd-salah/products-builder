import { IProduct, IformatInputs } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: 1,
    title: "products one",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero at. Ullam, recusandae cupiditate sapiente ducimus quisquam dolor itaque perferendis adipisci in ab soluta incidunt qui, quaerat accusamus iste quam.",
    price: "200",
    category: {
      name: "cars",
      imgURL: "https://placehold.c0/200",
    },
    imgURL: "https://placehold.co/400",
    colors: ["red", "green", "blue"],
  },
  {
    id: 2,
    title: "products tow",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero at. Ullam, recusandae cupiditate sapiente ducimus quisquam dolor itaque perferendis adipisci in ab soluta incidunt qui, quaerat accusamus iste quam.",
    price: "200",
    category: {
      name: "cars",
      imgURL: "https://placehold.c0/200",
    },
    imgURL: "https://placehold.co/400",
    colors: ["red", "green", "blue"],
  },
  {
    id: 3,
    title: "products three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero at. Ullam, recusandae cupiditate sapiente ducimus quisquam dolor itaque perferendis adipisci in ab soluta incidunt qui, quaerat accusamus iste quam.",
    price: "200",
    category: {
      name: "cars",
      imgURL: "https://placehold.c0/200",
    },
    imgURL: "https://placehold.co/400",
    colors: ["red", "green", "blue"],
  },
];

export const formInputs: IformatInputs[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imgURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
