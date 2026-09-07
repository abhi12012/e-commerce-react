import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import products from './data/products'
import ProductCard from './components/ProductCard'

function App() {
  

  return (
    <>
      <Navbar />

<main>
   
  <Hero />
 
{products.map((product) => {
  return (
    <ProductCard
      key={product.id}
      product={product}
    />
  )
})}


</main>
    </>

  )
}
export default App