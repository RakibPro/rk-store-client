import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddNewItem = () => {
    // get data using reactHookForm
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

    const handleAddNewItem = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const product = {
                        name: data.name,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity),
                        description: data.description,
                        img: imgData.data.url,
                    };
                    // send products information to database
                    fetch('http://localhost:5000/inventory', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            toast.success(`${data.name} added successfully`);
                        });
                }
            });
    };

    return (
        <section className='min-h-screen bg-gray-100'>
            <div className='flex justify-center'>
                <div className='w-96 md:w-[400px] px-8 rounded-lg bg-white my-10 p-10 shadow-2xl flex-col lg:flex-row text-center'>
                    {/* Title */}
                    <h2 className='text-3xl text-center text-[#3bb77e] font-bold'>
                        Add a New Product
                    </h2>
                    {/* Title Underline */}
                    <div className='border-2 border-[#3bb77e] w-32 rounded-lg inline-block mt-4 mb-2'></div>
                    <form onSubmit={handleSubmit(handleAddNewItem)}>
                        {/* Name Field */}
                        <div className='w-full mt-3 mb-5'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='input input-bordered font-medium w-full'
                                {...register('name', {
                                    required: 'Please enter product name !',
                                })}
                            />
                            {errors.name && (
                                <p
                                    role='alert'
                                    className='text-error text-start font-medium mt-2 -mb-2'
                                >
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                        {/* Price Field */}
                        <div className='form-control w-full mb-5'>
                            <input
                                type='number'
                                placeholder='Price'
                                className='input input-bordered font-medium w-full'
                                {...register('price', {
                                    required: 'Please enter product price !',
                                })}
                            />
                            {errors.price && (
                                <p
                                    role='alert'
                                    className='text-error text-start font-medium mt-2 -mb-2'
                                >
                                    {errors.price?.message}
                                </p>
                            )}
                        </div>
                        {/* Quantity Field */}
                        <div className='form-control w-full mb-5'>
                            <input
                                type='number'
                                placeholder='Quantity'
                                className='input input-bordered font-medium w-full'
                                {...register('quantity', {
                                    required: 'Please enter product quantity !',
                                })}
                            />
                            {errors.quantity && (
                                <p
                                    role='alert'
                                    className='text-error text-start font-medium mt-2 -mb-2'
                                >
                                    {errors.quantity?.message}
                                </p>
                            )}
                        </div>
                        {/* Description Field */}
                        <div className='form-control w-full mb-5'>
                            <textarea
                                placeholder='Description'
                                className='textarea textarea-bordered font-medium text-base w-full'
                                {...register('description', {
                                    required:
                                        'Please enter product description !',
                                })}
                            ></textarea>
                            {errors.description && (
                                <p
                                    role='alert'
                                    className='text-error text-start font-medium mt-2 -mb-2'
                                >
                                    {errors.description?.message}
                                </p>
                            )}
                        </div>
                        {/* Image Field */}
                        <div className='form-control w-full mb-4'>
                            <input
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '20px',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    borderStyle: 'dashed',
                                    backgroundColor: '#fafafa',
                                    color: '#bdbdbd',
                                    outline: 'none',
                                }}
                                type='file'
                                className='input input-bordered font-medium w-full'
                                {...register('image', {
                                    required:
                                        'Please choose a photo for your product !',
                                })}
                            />
                            {errors.image && (
                                <p
                                    role='alert'
                                    className='text-error text-start font-medium mt-2 -mb-3'
                                >
                                    {errors.image?.message}
                                </p>
                            )}
                        </div>
                        {/* Submit Button */}
                        <input
                            type='submit'
                            value='Add'
                            className='w-full max-w-xs border-2 border-[#3bb77e] text-white mt-2 rounded-lg px-14 py-2 font-semibold bg-[#3bb77e] hover:bg-white hover:text-[#3bb77e] transition-all duration-300 cursor-pointer'
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddNewItem;
