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
  setSuccess("")


  if (email === "" || password === "") {
  setError("Email and password are required")
  return
}



if (password.length < 6) {
  setError("Password must be at least 6 characters")
  return
}



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (!emailPattern.test(email)) {
  setError("Please enter a valid email")
  return
}

setSuccess("Login successful")

}}>


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


    <button>
      Login
    </button>
  </form>
</div>
  )
}

export default Login