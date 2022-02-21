import "./styles.css"
import { useEffect } from 'react'
import useCart from '../../hooks/useCart'

export default function Product({ item }){
  const { addToCart, cart, totalCartCount} = useCart()
  useEffect(() => console.log('cart', cart))
  useEffect(() => console.log('totalCartCount', totalCartCount()))
  
  return(
    <div className="product-card">
      <h5>{item.name}</h5>
      <p>calories: {item.calories}</p>
      <p>cost: {item.cost}</p>
      <button 
        onClick={() => addToCart(item)}
      >
        Add to cart
      </button>
    </div>
  )
}

/*
Product needs to:
  - add to cart ()
  - remove from cart ()
  - know if it is in the cart
*/