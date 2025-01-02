
import { get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {db} from '../../../firebase';


const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    async function show() {
        const dbRef = ref(db, "Blog");
        console.log(dbRef);
        const blogSnapshot = await get(dbRef);   
         console.log(blogSnapshot);
        if (blogSnapshot.exists()) {
            const bExist = blogSnapshot.val();
            const arr = [];
            for (const key in bExist) {
                const data = bExist[key];
                const newData = { ...data, id: key };
                arr.push(newData);
            }
            setBlogs(arr);
        } else {
            alert("No blogs found");
        }
    }

    useEffect(() => {
        show();
    }, []);

    return (
        <>
            <div className="container my-5" data-aos="fade-left">
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-lg-4 mt-4 " key={blog.id} >
                            <div className="card shadow border-1  rounded-4"  height={600}>
                                <img src={blog.b_image} alt="dummy"  height={300} />
                                <div className="card-body bg-black text-white">
                                    <h3>{blog.b_title}</h3>
                                  <div className='data d-flex'>  
                                     <div className="auth bg-secondary  rounded-pill">
 <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/xlzd9t5kh1z2mjqiriex.png" alt="" width={'25px'}/></div><br />
                                      <span  className='mx-2 '> {blog.b_writer}</span>
                                  
                                    <span className='mx-2 '>{blog.b_category}</span> 
                               
                                     </div> <NavLink  className=' text-white h-5  mx-4  mt-1  btn btn-outline-secondary ' to={`/Read/${blog.id}`}>Read More..
                                         <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020172/Blogtastic/lajt1jxadcuxdyjhp381.png" alt="" width={'25px'}/></NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;

