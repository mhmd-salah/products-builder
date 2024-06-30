import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <div
        className="
      grid grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-4
      mt-5
      "
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
