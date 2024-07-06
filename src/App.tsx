import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modle from "./components/Ui/Modle";
import { categorys, colors, formInputs, productList } from "./data";
import Button from "./components/Ui/Button";
import { Wid } from "./enums";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
// import { Select } from "@headlessui/react";
import SelectMenu from "./components/Ui/SeclectMenu";
import { ProductName } from "./types";

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
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [selectedCatogry, setSelectedCategory] = useState(categorys[0]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgURL: "",
    price: "",
  });
  console.log(productToEditIdx)
  //->> controler dailog for open and close
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const openEditM = () => setIsOpenEdit(true);
  const closeEditM = () => setIsOpenEdit(false);
  // renders
  const renderProductList = products.map((product,idx) => {
    return (
        <ProductCard
          key={product.id}
          product={product}
          setProductToEdit={setProductToEdit}
          openEditM={openEditM}
          setProductToEditIdx={setProductToEditIdx}
          idx={idx}
        />
    );
  });
  const renderProductColors = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));
  const renderProductEditWithErrorMsg = (id:string,label:string,name:ProductName) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="text-xl mb-1">
          {label} 
        </label>
        <Input
          name={name}
          type={"text"}
          id={id}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  // handlers
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
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
    setProducts((prev) => [
      {
        ...product,
        id: Date.now(),
        colors: tempColors,
        category: selectedCatogry,
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColors([]);
    close();
    // throw new Error("function not implemented");
  };

  // edit |submit edit handler
  const submitEditHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imgURL } = productToEdit;
    const errors = productValidation({
      title: title,
      description: description,
      imgURL: imgURL,
      price: String(productToEdit.price),
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value == "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...products]
    updatedProducts[productToEditIdx] = { ...productToEdit ,colors:tempColors.concat(productToEdit.colors)};
    setProducts(updatedProducts)

    console.log("sending to server");
    setProductToEdit(defaultProduct);
    setTempColors([]);
    closeEditM()
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

          <div className="flex flex-wrap  gap-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="rounded-md text-sm p-1 text-white"
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex space-x-1">{renderProductColors}</div>

          {/* select menu */}
          <SelectMenu
            selected={selectedCatogry}
            setSelected={setSelectedCategory}
          />

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

      {/* edit modal  */}
      <Modle isOpen={isOpenEdit} close={closeEditM} title="Edit Product">
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg("imgURL", "Product img URL", "imgURL")}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}
          <div className="flex gap-1">{renderProductColors}</div>
          <div className="flex flex-wrap  gap-1">
            {tempColors.concat( productToEdit.colors).map((color) => (
              <span
                key={color}
                className="rounded-md text-sm p-1 text-white"
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>

          {/* <div className="flex space-x-1">{renderProductColors}</div> */}

          {/* select menu */}
          {/* <SelectMenu
            selected={selectedCatogry}
            setSelected={setSelectedCategory}
          /> */}

          <div className="flex gap-2 mt-4 ">
            <Button className="bg-sky-600" type="submit">
              Update
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
