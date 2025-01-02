import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { push, ref, set } from 'firebase/database';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import {db} from "../../../firebase";
import { get, ref, set } from "firebase/database";

const Update = () => {
  const redirect = useNavigate();
  const { BlogId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  async function UpdateBlog(BlogId) {
    const docRef = ref(db, `Blog/${BlogId}`);
    const docSnap = await get(docRef);
    console.log(docSnap);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.val());
      reset(docSnap.val());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    UpdateBlog(BlogId);
  }, []);



  const submitData = (data) => {
    const newDocRef = ref(db, `Blog/${BlogId}`);
    set(newDocRef, data)
      .then(() => {
        alert(" Blog Successfuly Updated")
        redirect(`/Blogs`);
      })
      .catch((error) => {
        alert("error: ", error.message);
      });
  };

  return (
    <div className="col-6 mx-auto my-5 p-5 shadow">
      <form onSubmit={handleSubmit(submitData)}>
        <div className="head d-flex">
        <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/omsmnkugqlx7nwjhyc5q.png" alt="" className='w-25 h-25' />
          <h1 className="text-center mt-5 mx-5">Changes.. Form </h1>
        </div>
        <select required className="form-select" {...register("b_category")}>
          <option disabled selected value="">
            Select Blog Category
          </option>
          <option value="Sports">Sports</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
          <option value="Fashion and beauty">Fashion and beauty</option>
          <option value="Travel">Travel</option>
          <option value="Art and design">Art and design</option>
        </select>
        <div className="mt-4">
          <input
            type="text"
            {...register("b_title")}
            className="form-control text-black"
            placeholder="Enter Blog title"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            {...register("b_desc")}
            className="form-control text-black"
            placeholder="Enter Blog description"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            {...register("b_image")}
            className="form-control text-black"
            placeholder="Enter Blog image URL"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            {...register("b_writer")}
            className="form-control"
            placeholder="Enter Writer name"
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-warning" >Update Blog</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
