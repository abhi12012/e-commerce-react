import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import products from './data/products'

function App() {
  console.log(products)

  products.map((product) => {
  console.log(product.name)
})

  return (
    <>
      <Navbar />

<main>
  <Hero />
  {products.map((product) => {
  return <p>{product.name}</p>
})}
</main>
    </>

  )
}
export default App