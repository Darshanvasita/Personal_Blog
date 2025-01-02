
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className="position-relative" style={{ width: "100%", height: "500px" }}>
        <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020170/Blogtastic/eh1eobkidpositdikssy.jpg" alt="Contact" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
        <div className="container position-absolute top-50 start-50 translate-middle text-center">
          <Link className="btn rounded-pill text-dark bg-white" to="/table">Your Helper</Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
