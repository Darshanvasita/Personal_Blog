import React, { useEffect } from 'react';
import Popular from './Popular';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Post = () => {

  useEffect(() => {
    Aos.init({duration:1000})
  },[])
  return (
    <div className="row mx-5 my-5" data-aos="fade-up"
    data-aos-duration="3000" >
      <h2 className='text-center mb-4 fw-bold post'>Popular Posts</h2>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <Popular title="Travel For Manali" b_writer="Dsvasita" category="Travel" Imgs="https://www.bookmarkresorts.com/wp-content/uploads/2024/01/SM868466-transformed.jpeg" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <Popular title="Music Business Worldwide" b_writer="Darshan Vasita" category="Music" Imgs="https://media.licdn.com/dms/image/C4D12AQG9ev_FmxSwAg/article-cover_image-shrink_720_1280/0/1571237944468?e=2147483647&v=beta&t=DyT8Rc4AlYmFkb3PhgVUqLhmiO4jmnnWZOtMB9L_QfU" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <Popular title="ICC World Cup Final Analysis" b_writer="Jyoti Jiger" category="Sports" Imgs="https://i0.wp.com/sportzwiki.com/wp-content/uploads/2023/05/T20-World-Cup-1-scaled.jpg" />
      </div>
    </div>
  );
}

export default Post;
