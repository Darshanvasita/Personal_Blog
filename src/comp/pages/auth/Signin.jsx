import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";

const Signin = () => {
  const [userData, setData] = useState({});
  const navigate = useNavigate();

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  navigate('/')
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.providerData);
        setData(user.providerData[0]);
      }
    });
  }, []);

  return (
    <div className="datapage d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4 rounded"
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
        }}
      >
        <h2 className="text-center mb-4 text-primary">Sign In</h2>
        <div className="text-center mb-3">
          <img
            src="https://res.cloudinary.com/ddfbkv7ed/image/upload/v1735811168/lzrayjeqnci8lqxd87hk.png"
            alt="Login Illustration"
            style={{ width: "150px", borderRadius: "50%" }}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
          onClick={googleAuth}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          <img
            src="https://res.cloudinary.com/ddfbkv7ed/image/upload/v1735807644/s4owqhfyna84nd1dp5gs.png"
            alt="Google"
            className="me-2"
            style={{ width: "20px" }}
          />
          Sign in with Google
        </button>
        <p className="mt-3 text-center text-muted" style={{ fontSize: "14px" }}>
          By signing in, you agree to our <a href="#">Terms & Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Signin;
