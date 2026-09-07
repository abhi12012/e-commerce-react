import { useParams } from 'react-router-dom'
import products from '../data/products'

function ProductDetails() {
    const { id } = useParams()

    const selectedProduct = products.find(
  (product) => product.id === Number(id)
)

if (!selectedProduct) {
  return <h2>Product Not Found</h2>
}
    
  return (
    <div className="product-details">
      <h2>{selectedProduct.name}</h2>

      <p>Price: ₹{selectedProduct.price}</p>
      <p>Category: {selectedProduct.category}</p>

      

      <button>Add to Cart</button>
    </div>
  )
}

export default ProductDetails