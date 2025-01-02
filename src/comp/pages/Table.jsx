
import { get, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { db } from '../../../firebase';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const Table = () => {
  const [blogs, setBlogs] = useState([]);

  async function show() {
    const dbRef = ref(db, "Blog");
    const blogSnapshot = await get(dbRef);
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

  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const dbRef = ref(db, `Blog/${id}`);
      await remove(dbRef);
      show();
    }
  }

  return (
    <>
      <h1 className='text-center fw-bolder'>Blog Information</h1>
      <div className="table-responsive mt-5 py-3">
        <table className='table table-bordered table-striped table-hover text-center'>
          <thead className='table'>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Image</th>
              <th>Writer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.b_title}</td>
                <td>{blog.b_category}</td>
                <td><img src={blog.b_image} alt="IMG" className='rounded-4 img-fluid' style={{ width: "50px" }} /></td>
                <td>{blog.b_writer}</td>
                <td>
                  <button className='btn btn-danger ms-3' onClick={() => handleDelete(blog.id)}><FaTrash /></button>
                  <NavLink to={`/Update/${blog.id}`} className='btn btn-warning ms-3'><AiFillEdit  /></NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

