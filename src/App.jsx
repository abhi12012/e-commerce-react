import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import products from './data/products'
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Cart from './components/Cart'


function App() {
  
const [search, setSearch] = useState("")
const [category, setCategory] = useState("All")
const [sort, setSort] = useState("default")
const [cart, setCart] = useState([])




const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())

  const matchesCategory =
    category === "All" || product.category === category

  return matchesSearch && matchesCategory
})



const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sort === "low") {
    return a.price - b.price
  }

  if (sort === "high") {
    return b.price - a.price
  }


  return 0
})


const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.product.id === product.id
  )

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  } else {
    setCart([
      ...cart,
      {
        product: product,
        quantity: 1
      }
    ])
  }
}



const increaseQuantity = (productId) => {
  setCart(
    cart.map((item) =>
      item.product.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}





const decreaseQuantity = (productId) => {
  setCart(
    cart.map((item) =>
      item.product.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  )
}




const removeFromCart = (productId) => {
  setCart(
    cart.filter((item) => item.product.id !== productId)
  )
}



  return (
  <>
    <Navbar cartCount={cart.length} />


    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Hero />

           


           <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>



<select
  value={category}
  onChange={(event) => setCategory(event.target.value)}
>
  <option value="All">All Categories</option>
  <option value="Clothing">Clothing</option>
  <option value="Footwear">Footwear</option>
  <option value="Electronics">Electronics</option>
</select>



<select
  value={sort}
  onChange={(event) => setSort(event.target.value)}
>
  <option value="default">Sort By</option>
  <option value="low">Price: Low → High</option>
  <option value="high">Price: High → Low</option>
</select>






            <h2>Our Products</h2>

            <div className="products">
  {filteredProducts.length === 0 ? (
    <p>No products found</p>
  ) : (
    sortedProducts.map((product) => {
      return (
        <ProductCard
  key={product.id}
  product={product}
  addToCart={addToCart}
/>
      )
    })
  )}
</div>
          </main>
        }
      />



      <Route
        path="/products"
        element={
          <main>
            <h2>Our Products</h2>

            <div className="products">
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              })}
            </div>
          </main>



        }



      />





<Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeFromCart={removeFromCart}
    />
  }
/>



     <Route
  path="/products/:id"
  element={<ProductDetails />}
/>


    </Routes>
  </>
)
}
export default App