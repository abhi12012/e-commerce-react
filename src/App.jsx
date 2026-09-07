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



const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())

)

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



            <h2>Our Products</h2>

            <div className="products">
              {filteredProducts.map((product) => {
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