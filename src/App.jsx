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
 
<ProductCard product={products[0]} />

</main>
    </>

  )
}
export default App