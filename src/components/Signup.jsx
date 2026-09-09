import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")


  return (
    <div>
      <h2>Signup</h2>

      {error && <p>{error}</p>}
      

     <form onSubmit={(event) => {
  event.preventDefault()

  if (password !== confirmPassword) {
  setError("Passwords do not match")
  return
}

  console.log("Signup form submitted")
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