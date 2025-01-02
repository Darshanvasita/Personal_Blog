
import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../../../firebase";

const All = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  async function show() {
    const dbRef = ref(db, "Blog");
    const blogSnapshot = await get(dbRef);
    if (blogSnapshot.exists()) {
      const BExist = blogSnapshot.val();
      const arr = [];
      for (const key in BExist) {
        const data = BExist[key];
        const newData = { ...data, id: key };
        arr.push(newData);
      }
      // console.log("arr............");
      // console.log(arr);
      const newArr = arr.filter((ele) => {
        return ele.b_category == id;
      });
      // console.log("newArr.............");
      // console.log(newArr);
      setBlogs(newArr);
    } else {
      alert("No blogs found");
    }
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      <div className="container my-5">
        <h2>{id}</h2>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 mt-4" key={blog.id}>
              <div className="card shadow border-0">
                <img src={blog.b_image} alt="dummy" height={300} />
                <div className="card-body">
                  <h3>{blog.b_title}</h3>
                  <span>{blog.b_category}</span>
                  <p>{blog.b_writer}</p>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
