import React from 'react'

const About = () => {
  return (
    <div className="container my-5">

  {/* <!-- Page Title --> */}
  <div className="text-center mb-5">
    <h1 className="fw-bold">About Us</h1>
    <p className="text-muted">Learn more about our story and mission</p>
  </div>

  {/* <!-- About Section --> */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="https://picsum.photos/200/300" className="img-fluid rounded shadow-sm" alt="about" />
    </div>
    <div className="col-md-6">
      <h3 className="fw-bold">Who We Are</h3>
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
  <div className="row text-center g-4 mb-5">
    <div className="col-md-6">
      <div className="p-4 border rounded h-100">
        <h4 className="fw-bold">Our Mission</h4>
        <p className="text-muted">
          To deliver high-quality products at affordable prices while ensuring 
          excellent customer service.
        </p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="p-4 border rounded h-100">
        <h4 className="fw-bold">Our Vision</h4>
        <p className="text-muted">
          To become a trusted online destination for customers looking for 
          quality, reliability, and convenience.
        </p>
      </div>
    </div>
  </div>

  {/* <!-- Team Section --> */}
  <div className="text-center mb-4">
    <h2 className="fw-bold">Our Team</h2>
  </div>

  <div className="row g-4 text-center">
    <div className="col-md-4">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="team" />
      <h5 className="fw-bold">John Doe</h5>
      <p className="text-muted small">Founder & CEO</p>
    </div>
    <div className="col-md-4">
      <img src="https://randomuser.me/api/portraits/men/2.jpg" className="rounded-circle mb-3" alt="team" />
      <h5 className="fw-bold">Jane Smith</h5>
      <p className="text-muted small">Marketing Head</p>
    </div>
    <div className="col-md-4">
      <img src="https://randomuser.me/api/portraits/men/3.jpg" className="rounded-circle mb-3" alt="team" />
      <h5 className="fw-bold">David Lee</h5>
      <p className="text-muted small">Lead Developer</p>
    </div>
  </div>

</div>
  )
}

export default About