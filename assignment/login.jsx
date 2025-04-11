import { usestate } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setusername] = usestate('')
  const [password, setpassword] = usestate('')
  const navigate = usenavigate()

  const handleLogin = async () => {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'post',
      body: json.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    if (data.token) {
      localStorage.setItem('token', data.token)
      navigate('/home')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
        
      <h2>login</h2>
      <input placeholder="username" onchange={e => setusername(e.target.value)} />
      <input type="password" placeholder="password" onchange={e => setpassword(e.target.value)} />
      <button onClick={handleLogin}>login</button>
    </div>
  )
}