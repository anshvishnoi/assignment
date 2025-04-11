import { useeffect, usestate } from 'react'
import { link } from 'react-router-dom'

export default function home() {
  const [products, setproducts] = usestate([])

  useeffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])

  return (
    <div classname="grid">
      {products.map(p => (
        
          <div>
            <img src={p.image} alt={p.title} height={100} />
            <h4>{p.title}</h4>
          </div>
         
        
        
      ))}
    </div>
  )
}