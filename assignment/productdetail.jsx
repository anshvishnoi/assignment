import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    // fetch (https:fakestoreapi.com/products/${id})
      then(res => res.json())
      .then(setProduct)
      .catch(err => console.error('Error fetching product:', err))
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <img src={product.image} alt={product.title} height={150} style={{ display: 'block', marginBottom: '20px' }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}