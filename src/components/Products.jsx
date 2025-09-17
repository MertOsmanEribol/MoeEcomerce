import ProductItem from "./ProductItem";

function Products({ products, cart, setCart }) {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8 mt-10">
      {products.map((product, index) => (
        <ProductItem 
          key={index} 
          product={product} 
          cart={cart} 
          setCart={setCart}  
        />
      ))}
    </div>
  );
}

export default Products;
