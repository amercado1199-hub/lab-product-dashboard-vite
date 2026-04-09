import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
return (
<div
className={
product.inStock
? styles.card
: `${styles.card} ${styles.outOfStock}`
}
>
<h2>{product.name}</h2>
<p>Price: {product.price}</p>
<p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
</div>
);
}

export default ProductCard;
