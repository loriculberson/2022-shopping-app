/*
create all functions and variables needed by
the ProductList & Product components
*/
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useProducts(){
  const [products, setProducts] = useState([])
  const productUrl = 'http://localhost:4000/products'
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(productUrl)
      setProducts(response.data)
    } catch (e) {
      console.log(e)
    }
  }
   
  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products
  }
}