import React from 'react'

const Register = () => {
  return (
    <div class="container my-5">
  <div class="row shadow rounded overflow-hidden">

    {/* <!-- Image Section --> */}
    <div class="col-lg-6 d-none d-lg-block">
      <img src="https://picsum.photos/800/600" 
           class="img-fluid h-100 w-100 object-fit-cover" 
           alt="register image" />
    </div>

    {/* <!-- Form Section --> */}
    <div class="col-lg-6 bg-white">
      <div class="p-5">

        <div class="text-center mb-4">
          <h2 class="fw-bold">Create Account</h2>
          <p class="text-muted">Sign up to get started</p>
        </div>

        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">First Name</label>
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Last Name</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Create password" />
          </div>

          <div class="mb-3">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Confirm password" />
          </div>

          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="terms" />
            <label class="form-check-label" for="terms">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button class="btn btn-primary w-100 mb-3">Register</button>

          <div class="text-center small">
            Already have an account? 
            <a href="#" class="text-decoration-none">Login</a>
          </div>

        </form>

      </div>
    </div>

  </div>
</div>
  )
}

export default Register