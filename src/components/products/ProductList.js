import Product from './Product'
import useProducts from '../../hooks/useProducts'

export default function ProductList(){
  const { products } = useProducts()

  const list = products?( products.map(product => {
    return (
      <Product 
        key={product.id}
        item={product} 
      /> 
    )
  })) : <p>No products available</p>

  return (
    <div className="product-wrapper">
      <h2>Product List</h2>
      <div className="product-list">{list}</div>
    </div>
  )

}

/*
ProductList needs to:
  - all products
*/