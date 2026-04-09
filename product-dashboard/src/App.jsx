import ProductList from "./components/ProductList";

const products = [
{ id: 1, name: "Laptop", price: 999, inStock: true },
{ id: 2, name: "Phone", price: 699, inStock: false },
{ id: 3, name: "Headphones", price: 199, inStock: true }
];

function App() {
return (
<div>
<h1>Product Dashboard</h1>
<ProductList products={products} />
</div>
);
}

export default App;
