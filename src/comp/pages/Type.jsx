import React from "react";
import { useNavigate } from "react-router-dom";

const Type = (props) => {
  const navigate = useNavigate();
  function showName(name) {
    navigate(`/All/${name}`);
  }
  return (
    <>
      <div
        className="card position-relative main-img rounded-4"
        style={{ border: "1px solid #10375C" }}
        onClick={() => showName(props.Name)}
      >
        <img
          src={props.Img}
          className="card-img-top propimg opacity-75 rounded-4 img-fluid"
          alt={props.Name}
          style={{ height: "250px" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle opacity-100">
          <span className="name-title">{props.Name}</span>
        </div>
      </div>
    </>
  );
};

export default Type;

