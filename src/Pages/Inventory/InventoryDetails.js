import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const InventoryDetails = () => {
    const { _id, name, description, img, price, quantity, supplierName, sold } =
        useLoaderData();
    const [productQuantity, setProductQuantity] = useState(quantity);
    const [productSold, setProductSold] = useState(sold);
    const [showForm, setShowForm] = useState(false);

    const [axiosSecure] = useAxiosSecure();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    // Delivered Button Function
    const handleDelivered = async () => {
        if (productQuantity > 0) {
            setProductQuantity(productQuantity - 1);
            setProductSold(productSold + 1);

            const requestBody = {
                productQuantity: productQuantity - 1,
                productSold: productSold + 1,
            };

            axiosSecure
                .put(`http://localhost:5000/inventory/${_id}`, requestBody, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    if (response.data.modifiedCount > 0) {
                        toast.success(`${name} Is Delivered`);
                    }
                })
                .catch((error) => {
                    // Handle error here
                });
        }
    };

    // Form Toggle Function
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Restock Button Function
    const restockItem = (data) => {
        if (data.quantity > 0) {
            const addedQuantity = parseInt(data.quantity);
            setProductQuantity(productQuantity + addedQuantity);

            const requestBody = JSON.stringify({
                productQuantity: productQuantity + addedQuantity,
                productSold: productSold,
            });

            axiosSecure
                .put(`http://localhost:5000/inventory/${_id}`, requestBody, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    return response.data;
                })
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success(`${addedQuantity} ${name} Is Added`);
                    }
                })
                .catch((error) => {
                    // Handle error here
                });
        } else {
            toast.error('Input Positive Value');
        }
    };

    return (
        <section>
            <div className='flex flex-col lg:flex-row m-10'>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    viewport={{ once: true }}
                    src={img}
                    alt='product'
                    className='border rounded-lg md:w-[400px] lg:w-[500px] mx-auto lg:mx-0'
                />
                <motion.div
                    initial={{
                        x: 200,
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    viewport={{ once: true }}
                    className='lg:ml-20 mt-10 text-center lg:text-start'
                >
                    <h2 className='text-4xl font-bold'>{name}</h2>
                    <p className='text-2xl text-[#3bb77e] font-semibold my-3'>
                        Price ${price}
                    </p>
                    <p className='mb-3'>{description}</p>
                    <p className='font-semibold mt-2 text-center lg:text-start'>
                        <span className='text-lg font-semibold text-[#3bb77e]'>
                            {productQuantity ? (
                                productQuantity
                            ) : (
                                <span className='text-lg font-semibold text-red-500'>
                                    No item
                                </span>
                            )}
                        </span>{' '}
                        in stock
                    </p>
                    <p className='font-semibold text-center lg:text-start my-1'>
                        Supplier{' '}
                        <span className='font-semibold text-[#3bb77e] hover:text-red-500 cursor-pointer transition-all duration-300'>
                            {supplierName}
                        </span>
                    </p>
                    <p className='font-semibold text-center lg:text-start'>
                        {productSold ? (
                            <>
                                <span className='text-lg font-semibold text-[#3bb77e]'>
                                    {productSold}
                                </span>{' '}
                                item Sold
                            </>
                        ) : (
                            <>Not sold yet</>
                        )}
                    </p>
                    {/* Delivered Button */}
                    <button
                        onClick={handleDelivered}
                        className='btn w-36 mt-3 text-white border-none tracking-[3px]
                        font-bold bg-[#3bb77e] hover:bg-[#fdc040] hover:text-black transition-all duration-300'
                    >
                        Delivered
                    </button>
                    <br />
                    {/* ReStock Button */}
                    <button
                        onClick={toggleForm}
                        className='btn w-36 mt-3 text-white border-none tracking-[3px]
                        font-bold bg-[#3bb77e] hover:bg-[#fdc040] hover:text-black transition-all duration-300'
                    >
                        Restock
                    </button>
                    {/* ReStock Form */}
                    {showForm && (
                        <form onSubmit={handleSubmit(restockItem)}>
                            {/* Restock input field */}
                            <div className='flex flex-col lg:flex-row justify-center lg:justify-start'>
                                <div className='bg-gray-100 w-36 lg:w-56 p-2 flex items-center mx-auto lg:mx-0 mt-4 rounded-md'>
                                    <input
                                        type='number'
                                        placeholder='Quantity'
                                        className='bg-gray-100 outline-none flex-1 text-center lg:text-left w-full'
                                        {...register('quantity', {
                                            required:
                                                'Please Enter Quantity First !',
                                        })}
                                    />
                                </div>
                                <div>
                                    <input
                                        type='submit'
                                        value='Update'
                                        className='border-2 border-[#3bb77e] text-[#3bb77e] rounded-lg lg:ml-5 mt-4 px-10 py-2 font-semibold hover:bg-[#3bb77e] hover:text-white transition-all duration-300 cursor-pointer uppercase'
                                    />
                                </div>
                            </div>
                            {errors.quantity && (
                                <p
                                    role='alert'
                                    className='text-error text-center lg:text-left pt-2 font-medium w-full'
                                >
                                    {errors.quantity?.message}
                                </p>
                            )}
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default InventoryDetails;
