import ProductCard from "./ProductCard";

function ProductList({ products }) {
const inStockProducts = products.filter((product) => product.inStock);

return (
<>
{inStockProducts.length === 0 ? (
<p>No products in stock.</p>
) : (
products.map((product) => (
<ProductCard
key={product.id}
product={product}
/>
))
)}
</>
);
}

export default ProductList;
