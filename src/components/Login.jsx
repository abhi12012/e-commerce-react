function Login() {
  return (
    <div>
  <h2>Login</h2>

  <form onSubmit={(event) => {
  event.preventDefault()
  console.log("Login form submitted")
}}>

    
    <input
      type="email"
      placeholder="Enter email"
    />

    <input
      type="password"
      placeholder="Enter password"
    />

    <button>
      Login
    </button>
  </form>
</div>
  )
}

export default Login