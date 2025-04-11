import { createcontext, usestate, useontext } from 'react'

const cartcontext = createcontext()

export function cartprovider({ children }) {
  const [cart, setCart] = useState([])
  const addtocart = (product) => {
    const exist = cart.find(p => p.id === product.id)
    if (exist) {
      setcart(cart.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
    } else {
      setcart([...cart, { ...product, qty: 1 }])
    }
  }

  const removeFfromcart = (id) => setcart(cart.filter(item => item.id !== id))
  const updateqty = (id, qty) => setcart(cart.map(item => item.id === id ? { ...item, qty } : item))
  const clearcart = () => setcart([])

  return (
    <cartcontext.provider value={{ cart, addtoCart, removefromcart, updateqty, clearcart }}>
      {children}
    </cartcontext.provider>
  )
}

export function usecart() {
  return usecontext(cartcontext)
}