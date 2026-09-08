import { useState } from 'react'



function Login() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [success, setSuccess] = useState("")

  return (
    <div>
  <h2>Login</h2>

  {error && <p>{error}</p>}
  {success && <p>{success}</p>}

  <form onSubmit={(event) => {
  event.preventDefault()

  setError("")
  


  if (email === "" || password === "") {
  setError("Email and password are required")
  return
}

setSuccess("Login successful")

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