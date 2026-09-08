function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product.id}>
              <p>
                {item.product.name} × {item.quantity}
              </p>

              <button onClick={() => increaseQuantity(item.product.id)}>
                +
              </button>

              <button onClick={() => decreaseQuantity(item.product.id)}>
                −
              </button>

              <button onClick={() => removeFromCart(item.product.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  )
}

export default Cart