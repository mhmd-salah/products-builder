import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product}/>;
  });
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
