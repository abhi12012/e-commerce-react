import { useState } from 'react'



function Login() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  return (
    <div>
  <h2>Login</h2>

  <form onSubmit={(event) => {
  event.preventDefault()


  if (email === "" || password === "") {
  console.log("Email and password are required")
  return
}

console.log("Email:", email)
console.log("Password:", password)
}}>


    <input
  type="email"
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


    <button>
      Login
    </button>
  </form>
</div>
  )
}

export default Login