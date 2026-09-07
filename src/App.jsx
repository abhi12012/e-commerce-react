import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import products from './data/products'
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
  <>
    <Navbar />

    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Hero />

           

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
  element={
    <ProductDetails product={products[0]} />
  }
/>


    </Routes>
  </>
)
}
export default App