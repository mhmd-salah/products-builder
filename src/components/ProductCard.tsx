import { Wid } from "../enums";
import { IpropsProductCard } from "../interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./Ui/Button";

export default function ProductCard({ product:{title,description,imgURL ,price,category,colors} }: IpropsProductCard) {
  
  // ------------------
    const renderProductColors = colors.map((color) => (
      <CircleColor
        color={color}
        key={color}
      />
    ));
  // ------------------

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
              url={imgURL}
              alt={title}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        <div className="flex space-x-2 mt-3">
          <Button className="bg-sky-500">Edit</Button>
          <Button className="bg-red-600" width={Wid.full}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
