import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  return (
    <div>
      <h2>Signup</h2>

      <input
  type="text"
  placeholder="Enter name"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>


<input
  type="text"
  placeholder="Enter email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>


<input
  type="password"
  placeholder="Enter password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
/>


<input
  type="password"
  placeholder="Confirm password"
/>

    </div>
  )
}

export default Signup