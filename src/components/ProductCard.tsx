import Image from "./Image";
import Button, { Wid } from "./ui/Button";

export default function ProductCard() {
  return (
    <div className="border rounded-md p-3 flex flex-col">
      <Image url={"https://placehold.co/400"} className="rounded-md"/>
      <h3 className="text-2xl font-bold my-2">2020 Geneisi Gv70:Nomine...</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt?
        Veritatis tenetur quis eos?
      </p>
      <div className="flex space-x-1 my-3 *:rounded-full *:w-5 *:h-5 *:cursor-pointer">
        <span className="bg-indigo-600" />
        <span className="bg-teal-600 " />
        <span className="bg-orange-600" />
        <span className="bg-sky-500" />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">$500.00</span>
        <Image
          url={"https://placehold.co/400"} alt="this image" className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex space-x-2 mt-3">
        <Button className="bg-sky-500" 
          
          onClick={()=>{alert("hello")}}
        >Edit</Button>
        <Button className="bg-red-600" width={Wid.full}>Delete</Button>
      </div>
    </div>
  );
}
