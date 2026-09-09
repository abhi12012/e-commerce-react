import products from '../data/products'
import { useState } from 'react'

function Products() {
    const [loading, setLoading] = useState(false)
    

    const [error, setError] = useState("")
  return (
    <div>
      <h2>Products</h2>

{loading && <p>Loading...</p>}

{error && <p>{error}</p>}


{products.length === 0 && <p>No products available</p>}
{products.map((product) => (
  <p key={product.id}>
    {product.name} - ₹{product.price}
  </p>
))}
    </div>
  )
}

export default Products