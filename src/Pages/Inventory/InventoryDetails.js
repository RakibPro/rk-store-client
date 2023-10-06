import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const InventoryDetails = () => {
    const { _id, name, description, img, price, quantity, supplierName, sold } =
        useLoaderData();

    const handleDelivered = async () => {};
    return (
        <section>
            <div className='flex flex-col lg:flex-row m-10'>
                <img
                    src={img}
                    alt='product'
                    height={500}
                    width={500}
                    className='border rounded-lg'
                />
                <div className='md:ml-20 mt-10 text-center md:text-start'>
                    <h2 className='text-4xl font-bold'>{name}</h2>
                    <p className='text-2xl text-[#3bb77e] font-semibold my-3'>
                        Price ${price}
                    </p>
                    <p className='mb-3'>{description}</p>
                    <p className='font-semibold mt-2 text-center md:text-start'>
                        <span className='text-lg font-semibold text-[#3bb77e]'>
                            {quantity}
                        </span>{' '}
                        in stock
                    </p>
                    <p className='font-semibold text-center md:text-start my-1'>
                        Supplier{' '}
                        <span className='font-semibold text-[#3bb77e] hover:text-red-500 cursor-pointer transition-all duration-300'>
                            {supplierName}
                        </span>
                    </p>
                    <p className='font-semibold text-center md:text-start'>
                        <span className='text-lg font-semibold text-[#3bb77e]'>
                            {sold}
                        </span>{' '}
                        Sold
                    </p>

                    <button
                        onClick={handleDelivered}
                        className='btn w-36 mt-3 text-white border-none tracking-[3px]
                        font-bold bg-[#3bb77e] hover:bg-[#fdc040] hover:text-black transition-all duration-300'
                    >
                        Delivered
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InventoryDetails;
