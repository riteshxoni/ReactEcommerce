import React from 'react'

const Contact = () => {
  return (
    <div class="container my-5">

  {/* <!-- Banner --> */}
  <div class="mb-5">
    <img src="https://picsum.photos/1200/350" class="img-fluid rounded shadow-sm w-100" alt="contact banner" />
  </div>

  {/* <!-- Title --> */}
  <div class="text-center mb-5">
    <h1 class="fw-bold">Contact Us</h1>
    <p class="text-muted">We’d love to hear from you. Reach out anytime.</p>
  </div>

  <div class="row g-5">

    {/* <!-- Contact Form --> */}
    <div class="col-lg-7">
      <div class="card shadow-sm border-0">
        <div class="card-body p-4">
          <h4 class="mb-3">Send Message</h4>

          <form>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" placeholder="Your name" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Your email" />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Subject</label>
              <input type="text" class="form-control" placeholder="Subject" />
            </div>

            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea rows="5" class="form-control" placeholder="Write your message"></textarea>
            </div>

            <button class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    {/* <!-- Contact Info --> */}
    <div class="col-lg-5">
      <div class="card shadow-sm border-0 h-100">
        <div class="card-body p-4 text-center">

          <img src="https://randomuser.me/api/portraits/men/32.jpg"
               class="rounded-circle mb-3" width="120" height="120" alt="contact person" />

          <h5 class="fw-bold">Support Manager</h5>
          <p class="text-muted mb-3">Customer Support</p>

          <p class="mb-1"><strong>Email:</strong> support@mysite.com</p>
          <p class="mb-1"><strong>Phone:</strong> +91 98765 43210</p>
          <p class="text-muted small">We usually reply within 24 hours</p>

        </div>
      </div>
    </div>

  </div>

</div>
  )
}

export default Contact