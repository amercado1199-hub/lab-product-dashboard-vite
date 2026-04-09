import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
    // Stores all products
const [products, setProducts] = useState([
{ id: 1, name: "Laptop", price: 999, inStock: true },
{ id: 2, name: "Phone", price: 699, inStock: false },
{ id: 3, name: "Tablet", price: 499, inStock: true },
]);
// Removes a product id
function handleRemove(id) {
setProducts(products.filter((product) => product.id !== id));
}

return (
<div>
<h1>Product Dashboard</h1>
<ProductList products={products} onRemove={handleRemove} />
</div>
);
}

export default App;