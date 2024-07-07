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
import ConfirmModal from "./components/Ui/ConfirmModal";

import toast, { Toaster } from "react-hot-toast";

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
  const [isOpenConfirmM, setIsOpenConfirmM] = useState(false);
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
  //->> controler dailog for open and close
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const openEditM = () => setIsOpenEdit(true);
  const closeEditM = () => setIsOpenEdit(false);
  // renders
  const renderProductList = products.map((product, idx) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        setProductToEdit={setProductToEdit}
        openEditM={openEditM}
        setProductToEditIdx={setProductToEditIdx}
        idx={idx}
        setIsOpenConfirmM={setIsOpenConfirmM}
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
  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: ProductName
  ) => {
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

  //*--------------> Handlers
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
    toast("The product has been Added", {
      style: { color: "orange" },
    });
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

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    setProductToEdit(defaultProduct);
    setTempColors([]);
    toast("The product has been Updated", {
      style: { color: "teal" },
    });
    closeEditM();
    // throw new Error("function not implemented");
  };

  const onCancal = () => {
    setProduct(defaultProduct);
    close();
    toast("Cancled", {
      style: { color: "red" },
    });
  };

  const removeProductHandler = () => {
    const filterd = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filterd);
    toast("The product has been deleted", {
      style: { color: "red" },
    });
    setIsOpenConfirmM(false);
  };
  const onCancle = () => {
    setIsOpenConfirmM(false);
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
        className="bg-blue-600 p-2 text-xl text-white"
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
            <Button className="bg-sky-600 text-white " type="submit">
              Submit
            </Button>
            <Button
              className="bg-red-600 text-white"
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
          select menu
          <SelectMenu
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex gap-1">{renderProductColors}</div>
          <div className="flex flex-wrap  gap-1">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="rounded-md text-sm p-1 text-white"
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-4 ">
            <Button className="bg-sky-600 text-white" type="submit">
              Update
            </Button>
            <Button
              className="bg-red-600 text-white"
              onClick={() => {
                onCancal();
              }}
            >
              Cancle
            </Button>
          </div>
        </form>
      </Modle>
      <ConfirmModal
        isOpenConfirmM={isOpenConfirmM}
        setIsOpenConfirmM={setIsOpenConfirmM}
      >
        <Button
          className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
          onClick={removeProductHandler}
        >
          Yes, I'm sure to delete
        </Button>

        <Button
          className="rounded-md bg-gray-100  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none data-[hover]:bg-gray-200 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg--700 text-black"
          onClick={onCancle}
        >
          Cancle
        </Button>
      </ConfirmModal>
      <Toaster toastOptions={{}} />
    </div>
  );
}

export default App;

//the end 7-7-2024 09:38 AM morning
