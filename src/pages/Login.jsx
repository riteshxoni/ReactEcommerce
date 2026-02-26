import React from 'react'

const Login = () => {
  return (
    <div className="container my-5">
  <div className="row shadow rounded overflow-hidden">

    {/* <!-- Image Section --> */}
    <div className="col-lg-6 d-none d-lg-block">
      <img src="https://picsum.photos/800/600" 
           className="img-fluid h-100 w-100 object-fit-cover" 
           alt="login image" />
    </div>

    {/* <!-- Form Section --> */}
    <div className="col-lg-6 bg-white">
      <div className="p-5">

        <div className="text-center mb-4">
          <h2 className="fw-bold">Login</h2>
          <p className="text-muted">Access your account</p>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" for="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="small text-decoration-none">Forgot password?</a>
          </div>

          <button className="btn btn-primary w-100 mb-3">Login</button>

          <div className="text-center small">
            Don’t have an account? 
            <a href="#" className="text-decoration-none">Register</a>
          </div>
        </form>

      </div>
    </div>

  </div>
</div>
  )
}

export default Login