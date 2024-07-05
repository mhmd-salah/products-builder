import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modle from "./components/Ui/Modle";
import { colors, formInputs, productList } from "./data";
import Button from "./components/Ui/Button";
import { Wid } from "./enums";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";

function App() {
  const defaultProduct = {
    title: "",
    description: "",
    imgURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imgURL: "",
    },
  };
  // States hook
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [tempColors,setTempColors] = useState<string[]>([])
  console.log(tempColors)
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderProductColors=colors.map((color)=><CircleColor color={color} key={color} onClick={()=>setTempColors((prev)=>[...prev,color])}/>)

  // handlers
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]:""

    })
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imgURL } = product;
    const errors = productValidation({
      title: title,
      description: description,
      imgURL: imgURL,
      price: String(product.price),
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value == "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("sending to server");

    // throw new Error("function not implemented");
  };

  const onCancal = () => {
    setProduct(defaultProduct);
    close();
  };

  const renderFormInputList = formInputs.map((input) => (
    <div className="flex flex-col space-y-2" key={input.id}>
      <label htmlFor={input.id} className="text-xl mb-1">
        {input.label}
      </label>
      <Input
        name={input.name}
        type={input.type}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  //->> controler dailog for open and close
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  //*--------------------------------->>> Return component
  return (
    <div className="container mt-10">
      {/* this add product button */}
      <Button
        className="bg-blue-600 p-2 text-xl"
        width={Wid.fit}
        onClick={open}
      >
        Add Product
      </Button>

      {/* this proudcts on site */}
      <div
        className="
      grid grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3  
      lg:grid-cols-4
      mt-5
      gap-3
      "
      >
        {renderProductList}
      </div>

      {/* this dailog from headless */}
      <Modle isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex space-x-1">{renderProductColors}</div>
          <div className="flex gap-2 mt-4 ">
            <Button className="bg-sky-600" type="submit">
              Submit
            </Button>
            <Button
              className="bg-red-600"
              onClick={() => {
                onCancal();
              }}
            >
              Cancle
            </Button>
          </div>
        </form>
      </Modle>
    </div>
  );
}

export default App;
