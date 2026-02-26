import React from 'react'

const Register = () => {
  return (
    <div className="container my-5">
  <div className="row shadow rounded overflow-hidden">

    {/* <!-- Image Section --> */}
    <div className="col-lg-6 d-none d-lg-block">
      <img src="https://picsum.photos/800/600" 
           className="img-fluid h-100 w-100 object-fit-cover" 
           alt="register image" />
    </div>

    {/* <!-- Form Section --> */}
    <div className="col-lg-6 bg-white">
      <div className="p-5">

        <div className="text-center mb-4">
          <h2 className="fw-bold">Create Account</h2>
          <p className="text-muted">Sign up to get started</p>
        </div>

        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create password" />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" />
          </div>

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="terms" />
            <label className="form-check-label" for="terms">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button className="btn btn-primary w-100 mb-3">Register</button>

          <div className="text-center small">
            Already have an account? 
            <a href="#" className="text-decoration-none">Login</a>
          </div>

        </form>

      </div>
    </div>

  </div>
</div>
  )
}

export default Register