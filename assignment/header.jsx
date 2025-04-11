import { link, usenavigate } from 'react-router-dom'
import { usecart } from '../context/cartcontext'

export default function header() {
  const { cart } = useCart()
  const navigate = usenavigate()

  const handlelogout = () => {
    localstorage.removeitem('token')
    navigate('/')
  }

  return (
    <nav>
      <link to="/home">home</link>
      <link to="/cart">cart ({cart.length})</link>
      <button onclick={handlelogout}>logout</button>
    </nav>
  )
}