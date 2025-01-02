import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';

const Create = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageFile, setImageFile] = useState(null);

    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'Blogtastic');
        formData.append('cloud_name', 'ddfbkv7ed');

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/ddfbkv7ed/image/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            return data.secure_url;
        } catch (error) {
            throw new Error('Image upload failed: ' + error.message);
        }
    };

    const submitData = async (data) => {
        try {
            let imageUrl = '';
            if (imageFile) {
                imageUrl = await uploadImageToCloudinary(imageFile);
            }

            const newDocRef = push(ref(db, "Blog"));
            await set(newDocRef, { ...data, b_image: imageUrl });
            alert("Data saved successfully");
            navigate('/Blogs');
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className='col-6 mx-auto my-5 p-5 shadow'>
            <form onSubmit={handleSubmit(submitData)}>
                <div className="head d-flex">
                    <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/omsmnkugqlx7nwjhyc5q.png" alt="" className='w-25 h-25' />
                    <h1 className='text-center mt-5 mx-5'>Writer Blog</h1>
                    <p className='text-center mt-4 '>Your Daily Dose of Inspiration</p>
                </div>
                <select
                    required
                    className="form-select"
                    {...register("b_category")}
                >
                    <option disabled selected value="">Select Blog Category</option>
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
                        {...register('b_title', {
                            required: 'Title is required',
                            minLength: { value: 3, message: 'Title must be at least 3 characters' },
                            maxLength: { value: 20, message: 'Title cannot exceed 20 characters' },
                        })}
                        className='form-control text-black'
                        placeholder='Enter Blog title'
                    />
                    {errors.b_title && <span>{errors.b_title.message}</span>}
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        {...register('b_desc')}
                        className='form-control text-black'
                        placeholder='Enter Blog description'
                    />
                </div>
                <div className="mt-4">
                    <input
                        type="file"
                        className='form-control'
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        {...register('b_writer')}
                        className='form-control'
                        placeholder='Enter Writer name'
                    />
                </div>
                <div className="mt-4">
                    <button className='btn btn-info'>Submit Blog</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
