import React from 'react'

const Home = () => {
  return (
    <div class="container my-5">
      {/* <!-- Hero Section --> */}
      <div class="p-5 mb-5 bg-light rounded-3 text-center">
        <h1 class="display-5 fw-bold">Welcome to MySite</h1>
        <p class="lead">Shop the latest products at the best prices.</p>
        <a href="#" class="btn btn-primary btn-lg">Start Shopping</a>
      </div>

      {/* <!-- Featured Products --> */}
      <h2 class="mb-4 text-center">Featured Products</h2>
      <div class="row g-4">

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" height={"300px"} class="card-img-top" alt="product" />
            <div class="card-body text-center">
              <h5 class="card-title">Product One</h5>
              <p class="card-text text-muted">₹999</p>
              <a href="#" class="btn btn-outline-primary btn-sm">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" height={"300px"} class="card-img-top" alt="product" />
            <div class="card-body text-center">
              <h5 class="card-title">Product Two</h5>
              <p class="card-text text-muted">₹1299</p>
              <a href="#" class="btn btn-outline-primary btn-sm">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" height={"300px"} class="card-img-top" alt="product" />
            <div class="card-body text-center">
              <h5 class="card-title">Product Three</h5>
              <p class="card-text text-muted">₹799</p>
              <a href="#" class="btn btn-outline-primary btn-sm">View Details</a>
            </div>
          </div>
        </div>

      </div>

      {/* <!-- Call to Action --> */}
      <div class="text-center mt-5">
        <h3>Why Shop With Us?</h3>
        <p class="text-muted">High quality products, fast delivery, and great support.</p>
      </div>

    </div>
  )
}

export default Home