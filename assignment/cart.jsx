import { useCart } from '../context/cartcontext'
import { useState } from 'react'

export default function cart() {
  const { cart, removefromcart, updateqty, clearcart } = usecart()
  const [ordered, setordered] = usestate(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handlecheckout = () => {
    clearcart()
    setordered(true)
    settimeout(() => setordered(false), 4000)
  }

  return (
    <div>
      <h2>your cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <input type="number" value={item.qty} min="1" onchange={e => updateqty(item.id, parseint(e.target.value))} />
          <button onclick={() => removefromcart(item.id)}>remove</button>
        </div>
      ))}
      <h3>Total: ${total.tofixed(2)}</h3>
      <button onclick={handlecheckout}>checkout</button>
      {ordered && <div classname="popup">order placed successfully!</div>}
    </div>
  )
}