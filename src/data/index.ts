import { IProduct, Icategory, IformatInputs } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: 1,
    title: "products one",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero at. Ullam, recusandae cupiditate sapiente ducimus quisquam dolor itaque perferendis adipisci in ab soluta incidunt qui, quaerat accusamus iste quam.",
    price: "200",
    category: {
      name: "cars",
      imgURL: "https://placehold.co/400",
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
      imgURL: "https://placehold.co/200",
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
      imgURL: "https://placehold.co/200",
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

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1CBD",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#820000",
  "#FF0032",
];

export const categorys: Icategory[] = [
  {
    id: 1,
    name: "Electronics",
    imgURL:
      "https://images.pexels.com/photos/1054386/pexels-photo-1054386.jpeg",
  },
  {
    id: 2,
    name: "Fashion",
    imgURL:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
  {
    id: 3,
    name: "Home Appliances",
    imgURL: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  },
  {
    id: 4,
    name: "Books",
    imgURL:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    imgURL: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];