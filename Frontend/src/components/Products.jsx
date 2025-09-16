import ProductItem from "./ProductItem";

function Products({ products, cart, setCart }) {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8 mt-10">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} cart={cart} setCart={setCart}  />
      ))}
    </div>
  );
}

export default Products;