import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <nav className="navbar">

      <h2>E-commerce</h2>



<ul>
  <li>
   <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/products">Products</Link>
  </li>

  <li>
    <a href="#">Cart</a>
  </li>
</ul>

    </nav>
  )
}

export default Navbar