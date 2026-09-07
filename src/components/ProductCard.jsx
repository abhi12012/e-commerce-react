import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <button>Add to Cart</button>

      <Link to={`/products/${product.id}`}>
  View Details
</Link>

    </div>
  )
}

export default ProductCard