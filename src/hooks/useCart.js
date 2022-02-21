import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {
  const [cart, setCart] = useState([]);
  const cartUrl = "http://localhost:4000/cart";

  /*
  cart - all items with their quantities
  cartItem - product + quantity added

  */
  const fetchCart = async () => {
    try {
      const response = await axios.get(cartUrl);
      setCart(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (item) => {
    console.log('in the cart')
    /*
   create cartItem variable
    check if item exists in the cart
    Yes, update the quantity +1
    No, add with quantity = 1, add a productId that matched the item.id

    add cartItem to cart
    */
    let foundItem = cart.find((cartItem) => cartItem.productId === item.id);

    let response;
    //update the quantity of the item you already added to the cart
    if (foundItem) {
      const cartItem = { ...foundItem, quantity: foundItem.quantity + 1 };
      response = await axios.put(`${cartUrl}/${cartItem.id}`, cartItem);
      
      const updatedCartItems = cart.map(item => 
        item.productId === item.id ? response.data : item
      )

      setCart(updatedCartItems);
    } else {
      // create a new entry into the cart
      // separate the id from the rest of the attributes
      const { id, ...addedCartItem } = item;
      const newCartItem = { ...addedCartItem, productId: id, quantity: 1 };
      response = await axios.post(cartUrl, newCartItem);
      setCart([...cart, response.data]);
    }
  };

  const totalCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  return {
    cart,
    setCart,
    addToCart,
    totalCartCount,
  };
}
