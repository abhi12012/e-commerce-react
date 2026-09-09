import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")


  return (
    <div>
      <h2>Signup</h2>

      <input
  type="text"
  placeholder="Enter your name"
  required
/>

      {error && <p>{error}</p>}
      {success && <p>{success}</p>}


     <form onSubmit={(event) => {
  event.preventDefault()

  setError("")
setSuccess("")

if (name === "") {
  setError("Name is required")
  return
}

if (email === "") {
  setError("Email is required")
  return
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (!emailPattern.test(email)) {
  setError("Please enter a valid email")
  return
}

if (password === "") {
  setError("Password is required")
  return
}

if (password.length < 6) {
  setError("Password must be at least 6 characters")
  return
}

if (confirmPassword === "") {
  setError("Confirm password is required")
  return
}

if (password !== confirmPassword) {
  setError("Passwords do not match")
  return
}



setSuccess("Signup successful")
}}>


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
  value={confirmPassword}
  onChange={(event) => setConfirmPassword(event.target.value)}
/>


<button>
  Signup
</button>


</form>

    </div>
  )
}

export default Signup