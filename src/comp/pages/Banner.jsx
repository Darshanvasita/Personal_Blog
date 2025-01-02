import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Banner() {
  
  useEffect(()=>{
    Aos.init({
      duration:1000
    })
  },[])
  return (
    <>
      <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="mySwiper" 
      >
        <SwiperSlide ><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020168/Blogtastic/oi65kmjrqlfux4p7hwco.jpg" alt="Banner 1" className="img-fluid" /></SwiperSlide>
        <SwiperSlide ><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020168/Blogtastic/drdilfxg8iglax4yg9jv.jpg" alt="Banner 2" className="img-fluid" /></SwiperSlide>
        <SwiperSlide ><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/kr17z8x6uintw5dyaiov.jpg" alt="Banner 3" className="img-fluid" /></SwiperSlide>
        <SwiperSlide ><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/wr4qd9gcmh9norogwtt3.jpg" alt="Banner 4" className="img-fluid" /></SwiperSlide>
        <SwiperSlide ><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/kr17z8x6uintw5dyaiov.jpg" alt="Banner 5" className="img-fluid" /></SwiperSlide>
        <SwiperSlide ><img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/ka5rvipbia7t3vrxduhb.jpg" alt="Banner 6" className="img-fluid" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
