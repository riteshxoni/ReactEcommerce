import React from 'react'

const Product = ({ item }) => {
    return (
        <div className="col-10 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <div className="p-3 text-center">
                    <img
                        src={item.image}
                        style={{ height: "180px", objectFit: "contain" }}
                        className="img-fluid"
                        alt="product" />
                </div>

                <div className="card-body d-flex flex-column">
                    <h6 className="card-title clamp-1">{item.title}</h6>
                    <p className="text-muted small mb-2 clamp-3" >{item.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                        <span className="fw-bold" >{item.price}</span>
                        <button className="btn btn-sm btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product