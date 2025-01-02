import React from 'react';
import { useNavigate } from 'react-router-dom';

const Popular = (props) => {
  const share = useNavigate();
  
  return (
    <>
      <div className="container-fluid  justify-content-center mt-5" data-aos="flip-left"> 
        <div className="d-flex justify-content-center">
          <div className="card shadow border-1 mb-3" style={{minWidth:"270px", minHeight:"50px"}} >
            <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020171/Blogtastic/xzlzs8lcksn1haopddgm.png" alt="" style={{width:"30px"}} className='position-absolute mx-2 my-2' />
            <img src={props.Imgs} alt="dummy" height={300} style={{minHeight:"200px"}} className='position-relative' />
            <div className="card-body bg-black text-white">
              <h3>{props.title}</h3>
              <div className='data d-flex align-items-center'>  
                <div className="auth bg-secondary rounded-pill"> 
                  <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/xlzd9t5kh1z2mjqiriex.png" alt="" width={'25px'}/>
                </div>
                <span className='mx-2'>{props.b_writer}</span>
                <span className='mx-2'>{props.category}</span>                                              
              </div>
            </div>
          </div>             
        </div>
      </div>
    </>
  );
}

export default Popular;
