import { routes, route, navigate } from 'react-router-dom'
import login from './pages/login'
import home from './pages/home'
import productdetail from './pages/productdetail'
import cart from './pages/cart'
import header from './components/header'

function app() {
  const isauthenticated = localstorage.getItem('token')

  return (
    <>
      {isauthenticated && <header />}
      <routes>
        <route path="/" element={isauthenticated ? <navigate to="/home" /> : <login />} />
        <route path="/home" element={<home />} />
        <route path="/product/:id" element={<productdetail />} />
        <route path="/cart" element={<cart />} />
        <route path="*" element={<navigate to="/" />} />
      </routes>
    </>
  )
}

export default app