import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020171/Blogtastic/sz2ahdj6rl7zsk9tkewa.png" alt="Logo" className="w-25 h-25" />
              <p>Your Daily Dose of Inspiration</p>
              <p>
                Welcome to Blogtastic, where creativity meets inspiration! Dive into a world of engaging content, from lifestyle tips and travel adventures to tech insights and personal growth stories. At Blogtastic, we aim to inspire, inform, and entertain our readers with high-quality articles and thought-provoking pieces. Join our community and stay updated with the latest trends and ideas that matter to you. Let's embark on this journey of discovery and inspiration together!
              </p>
              <div className="social-icons">
                <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020170/Blogtastic/ulqrjtvtabitwl9w1lls.png" alt="Instagram" className="mx-1" style={{ width: "20px" }} />
                <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/sternpybulf9xihrxlco.png" alt="Twitter" className="mx-1" style={{ width: "20px" }} />
                <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020170/Blogtastic/jpfvlj1livwrbhoatxpw.png" alt="Facebook" className="mx-1" style={{ width: "20px" }} />
                <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020171/Blogtastic/r7iiy9yfbrqzwtev2rov.png" alt="Pinterest" className="mx-1" style={{ width: "20px" }} />
                <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/gdyltujqyli9o4lbszdy.png" alt="Youtube" className="mx-1" style={{ width: "20px" }} />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <h5>Posts</h5>
              <ul className="list-unstyled">
                <li><a href="#">Sports</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Fashion and beauty</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Art and design</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row mt-3">
            <div className="col text-center">
              <p>Blogtastic@&nbsp; All rights reserved. <br /><span>Developed By Darshan</span></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
