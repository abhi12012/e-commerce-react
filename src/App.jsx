import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import products from './data/products'
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'



function App() {
  
const [search, setSearch] = useState("")
const [category, setCategory] = useState("All")


const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())

  const matchesCategory =
    category === "All" || product.category === category

  return matchesSearch && matchesCategory
})


  return (
  <>
    <Navbar />

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


            <h2>Our Products</h2>

            <div className="products">
  {filteredProducts.length === 0 ? (
    <p>No products found</p>
  ) : (
    filteredProducts.map((product) => {
      return (
        <ProductCard
          key={product.id}
          product={product}
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
  path="/products/:id"
  element={<ProductDetails />}
/>


    </Routes>
  </>
)
}
export default App