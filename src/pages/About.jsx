import React from 'react'

const About = () => {
  return (
    <div class="container my-5">

  {/* <!-- Page Title --> */}
  <div class="text-center mb-5">
    <h1 class="fw-bold">About Us</h1>
    <p class="text-muted">Learn more about our story and mission</p>
  </div>

  {/* <!-- About Section --> */}
  <div class="row align-items-center mb-5">
    <div class="col-md-6">
      <img src="https://picsum.photos/200/300" class="img-fluid rounded shadow-sm" alt="about" />
    </div>
    <div class="col-md-6">
      <h3 class="fw-bold">Who We Are</h3>
      <p>
        We are a passionate team dedicated to providing high-quality products 
        and a seamless shopping experience. Our goal is to make online shopping 
        simple, fast, and reliable for everyone.
      </p>
      <p>
        Since our launch, we have focused on customer satisfaction, product 
        quality, and continuous improvement.
      </p>
    </div>
  </div>

  {/* <!-- Mission Vision --> */}
  <div class="row text-center g-4 mb-5">
    <div class="col-md-6">
      <div class="p-4 border rounded h-100">
        <h4 class="fw-bold">Our Mission</h4>
        <p class="text-muted">
          To deliver high-quality products at affordable prices while ensuring 
          excellent customer service.
        </p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="p-4 border rounded h-100">
        <h4 class="fw-bold">Our Vision</h4>
        <p class="text-muted">
          To become a trusted online destination for customers looking for 
          quality, reliability, and convenience.
        </p>
      </div>
    </div>
  </div>

  {/* <!-- Team Section --> */}
  <div class="text-center mb-4">
    <h2 class="fw-bold">Our Team</h2>
  </div>

  <div class="row g-4 text-center">
    <div class="col-md-4">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" class="rounded-circle mb-3" alt="team" />
      <h5 class="fw-bold">John Doe</h5>
      <p class="text-muted small">Founder & CEO</p>
    </div>
    <div class="col-md-4">
      <img src="https://randomuser.me/api/portraits/men/2.jpg" class="rounded-circle mb-3" alt="team" />
      <h5 class="fw-bold">Jane Smith</h5>
      <p class="text-muted small">Marketing Head</p>
    </div>
    <div class="col-md-4">
      <img src="https://randomuser.me/api/portraits/men/3.jpg" class="rounded-circle mb-3" alt="team" />
      <h5 class="fw-bold">David Lee</h5>
      <p class="text-muted small">Lead Developer</p>
    </div>
  </div>

</div>
  )
}

export default About