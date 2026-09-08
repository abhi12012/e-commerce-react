function Cart({ cart, increaseQuantity }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.product.id}>
          <p>
            {item.product.name} × {item.quantity}
          </p>

          <button onClick={() => increaseQuantity(item.product.id)}>
  +
</button>
        </div>
      ))}
    </div>
  )
}

export default Cart