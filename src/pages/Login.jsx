import React from 'react'

const Login = () => {
  return (
    <div class="container my-5">
  <div class="row shadow rounded overflow-hidden">

    {/* <!-- Image Section --> */}
    <div class="col-lg-6 d-none d-lg-block">
      <img src="https://picsum.photos/800/600" 
           class="img-fluid h-100 w-100 object-fit-cover" 
           alt="login image" />
    </div>

    {/* <!-- Form Section --> */}
    <div class="col-lg-6 bg-white">
      <div class="p-5">

        <div class="text-center mb-4">
          <h2 class="fw-bold">Login</h2>
          <p class="text-muted">Access your account</p>
        </div>

        <form>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Enter password" />
          </div>

          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="remember" />
              <label class="form-check-label" for="remember">
                Remember me
              </label>
            </div>
            <a href="#" class="small text-decoration-none">Forgot password?</a>
          </div>

          <button class="btn btn-primary w-100 mb-3">Login</button>

          <div class="text-center small">
            Don’t have an account? 
            <a href="#" class="text-decoration-none">Register</a>
          </div>
        </form>

      </div>
    </div>

  </div>
</div>
  )
}

export default Login