import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modle from "./components/Ui/Modle";
import { formInputs, productList } from "./data";
import Button from "./components/Ui/Button";
import { Wid } from "./enums";
import Input from "./components/Ui/Input";

function App() {
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  const renderFormInputList = formInputs.map((input) => (
    <div className="flex flex-col space-y-2">
      <label htmlFor={input.id} className="text-xl mb-1">{input.label}</label>
      <Input name={input.name} type={input.type} id={input.id} />
    </div>
  ));
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div className="container mt-10">
      <Button
        className="bg-blue-600 p-2 text-xl"
        width={Wid.fit}
        onClick={open}
      >
        Add Product
      </Button>
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
      <Modle isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3">{renderFormInputList}</form>
        <div className="flex gap-2 mt-4 ">
          <Button className="bg-sky-600">Submit</Button>
          <Button className="bg-red-600" onClick={close}>
            Cancle
          </Button>
        </div>
      </Modle>
    </div>
  );
}

export default App;
