import React, { useEffect } from "react";
import Type from "./Type";
const TypeData = () => {


  return (
    <>
      <div className="row mx-5 my-5" data-aos="fade-up">
        <h1 className="Buzz-title text-center fw-bold mb-4" style={{ color: "#844685" }}>Blogger Buzz</h1>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="https://res.cloudinary.com/diyqncua4/image/upload/v1728020173/Blogtastic/wbkno5bplcjm0hukrdze.jpg" Name="Sports" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/tjwc9vwiu7vq8eye4gv8.jpg" Name="Music" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/rkd44mb16wwdjcc2yhaf.jpg" Name="Business" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="https://res.cloudinary.com/diyqncua4/image/upload/v1728020170/Blogtastic/npv3rrgjunf41i7fwrlx.jpg" Name="Fashion and beauty" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/vyxcfuz5xr1fnz3x6rsg.jpg" Name="Travel" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Type Img="https://res.cloudinary.com/diyqncua4/image/upload/v1728020168/Blogtastic/z9fzlzvp9cbmeclrrkyj.jpg" Name="Art and design" />
        </div>
      </div>
    </>
  );
};

export default TypeData;

