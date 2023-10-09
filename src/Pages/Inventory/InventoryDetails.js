import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const InventoryDetails = () => {
    const { _id, name, description, img, price, quantity, supplierName, sold } =
        useLoaderData();
    const [productQuantity, setProductQuantity] = useState(quantity);
    const [productSold, setProductSold] = useState(sold);

    const handleDelivered = async () => {
        if (productQuantity > 0) {
            setProductQuantity(productQuantity - 1);
            setProductSold(productSold + 1);

            const url = `http://localhost:5000/inventory/${_id}`;
            const requestBody = JSON.stringify({
                productQuantity: productQuantity - 1,
                productSold: productSold + 1,
            });

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success(`${name} Is Delivered`);
                    } else {
                        toast.error('No item left');
                    }
                });
        }
    };
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
                    <p className='font-semibold text-center md:text-start my-1'>
                        Supplier{' '}
                        <span className='font-semibold text-[#3bb77e] hover:text-red-500 cursor-pointer transition-all duration-300'>
                            {supplierName}
                        </span>
                    </p>
                    <p className='font-semibold text-center md:text-start'>
                        {productSold ? (
                            <>
                                <span className='text-lg font-semibold text-[#3bb77e]'>
                                    {productSold}
                                </span>{' '}
                                Sold
                            </>
                        ) : (
                            <>Not sold yet</>
                        )}
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
