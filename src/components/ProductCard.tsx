/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Wid } from "../enums";
import { IpropsProductCard } from "../interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./Ui/Button";

function ProductCard({
  product,
  setProductToEdit,
  openEditM,
  setProductToEditIdx,
  idx,
  setIsOpenConfirmM,
}: IpropsProductCard) {
  const { title, description, price, category, colors } = product;
  // ------------------
  const renderProductColors =
    colors.length > 0 ? (
      colors.map((color) => <CircleColor color={color} key={color} />)
    ) : (
      <span>notAvilableColors</span>
    );
  // ------------------
  //-----> handler
  function onEdit() {
    setProductToEdit(product);
    openEditM();
    setProductToEditIdx(idx);
  }
  function onRemove() {
    setProductToEdit(product);
    setIsOpenConfirmM(true)
  }

  return (
    <div className="border rounded-md  flex flex-col max-w-sm md:max-w-lg mx-auto bg-white shadow-lg pb-2">
      <Image url={"https://placehold.co/400"} className="rounded-md" />
      <div className="p-2">
        <h3 className="text-2xl font-bold my-2">{title}</h3>
        <p>{textSlicer(description, 100)}</p>
        <div className="flex space-x-1 my-3 *:rounded-full *:w-5 *:h-5 *:cursor-pointer">
          {renderProductColors}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${price}</span>
          <div className="flex items-center gap-3">
            {category.name}
            <Image
              url={category.imgURL}
              alt={title}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        <div className="flex space-x-2 mt-3 items-end">
          <Button className="bg-sky-500 text-white" onClick={() => onEdit()}>
            Edit
          </Button>
          <Button className="bg-red-600 text-white" width={Wid.full} onClick={onRemove}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductCard);