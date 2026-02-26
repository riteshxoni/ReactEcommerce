import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            
            {/* <!-- Brand --> */}
            <Link to={"/"} className="navbar-brand fw-bold">eCommerce</Link>

            {/* <!-- Toggle button (mobile) --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar links --> */}
            <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to={"/home"} className="nav-link active" >Home</Link>
                </li>
                <li className="nav-item">
                <Link to={"/shop"} className="nav-link" >Shop</Link>
                </li>
                <li className="nav-item">
                <Link to={"/about"} className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                <Link to={"/contact"} className="nav-link">Contact</Link>
                </li>
            </ul>

            {/* <!-- Right side buttons --> */}
            <div className="d-flex gap-2">
                <Link to={"/login"} className="btn btn-outline-light btn-sm">Login</Link>
                <Link to={"/register"} className="btn btn-primary btn-sm">Register</Link>
            </div>
            </div>

        </div>
    </nav>
  )
}

export default Header