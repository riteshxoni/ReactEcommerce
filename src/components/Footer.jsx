import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
            <div className="row">

            {/* <!-- About --> */}
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold">eCommerce</h5>
                <p className="small">
                Simple eCommerce website for shopping quality products. 
                Fast delivery and secure payments.
                </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Quick Links</h5>
                <ul className="list-unstyled">
                <li><Link to={"/home"} className="text-decoration-none text-light">Home</Link></li>
                <li><Link to={"/shop"} className="text-decoration-none text-light">Shop</Link></li>
                <li><Link to={"/about"} className="text-decoration-none text-light">About</Link></li>
                <li><Link to={"/contact"} className="text-decoration-none text-light">Contact</Link></li>
                </ul>
            </div>

            {/* <!-- Account --> */}
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Account</h5>
                <ul className="list-unstyled">
                <li><Link to={"/login"} className="text-decoration-none text-light">Login</Link></li>
                <li><Link to={"/register"} className="text-decoration-none text-light">Register</Link></li>
                </ul>
            </div>

            </div>

            {/* <!-- Bottom --> */}
            <div className="text-center border-top pt-3 mt-3 small">
            © 2026 MySite. All rights reserved. Developed By Ritesh Soni
            </div>
        </div>
    </footer>
  )
}

export default Footer