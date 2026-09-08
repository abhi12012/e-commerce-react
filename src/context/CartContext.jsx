import { createContext, useState, useEffect } from 'react'

const CartContext = createContext()

function CartProvider({ children }) {


  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart")

  return savedCart ? JSON.parse(savedCart) : []
})


  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])


  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.product.id === product.id
    )

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([
        ...cart,
        {
          product: product,
          quantity: 1
        }
      ])
    }
  }





  const increaseQuantity = (productId) => {
  setCart(
    cart.map((item) =>
      item.product.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}



const decreaseQuantity = (productId) => {
  setCart(
    cart.map((item) =>
      item.product.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  )
}




const removeFromCart = (productId) => {
  setCart(
    cart.filter((item) => item.product.id !== productId)
  )
}



  return (
    <CartContext.Provider
  value={{
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  }}
>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }