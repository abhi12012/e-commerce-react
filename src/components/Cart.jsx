function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}

export default Cart