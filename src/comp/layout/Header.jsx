import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const Header = () => {
  const navigate = useNavigate();
  const [authuser, setAuthuser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthuser(user);
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logout successful");
        navigate("/Sign");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="logo" to="/">
          <img
            className="navbar-brand mx-5 mt-2"
            src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020171/Blogtastic/lhrbkhazdwkkrpfzjc1x.png"
            alt="Logo"
            style={{ width: "150px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#10375C" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" style={{ color: "#10375C" }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={{ color: "#10375C" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs" style={{ color: "#10375C" }}>
                Blogs
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-dark me-2">
              <Link className="nav-link" to="/Create">
                Writer...
              </Link>
            </button>
            {authuser ? (
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-outline-primary">
                <Link className="nav-link" to="/Sign">
                  SignIn
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
