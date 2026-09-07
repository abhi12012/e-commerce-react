function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>

      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>

      <button>Add to Cart</button>
    </div>
  )
}

export default ProductDetails