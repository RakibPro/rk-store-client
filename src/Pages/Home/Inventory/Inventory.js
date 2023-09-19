import React from 'react';

const Inventory = () => {
    return (
        <div className='text-center'>
            <h1
                className='text-5xl py-5 mt-10 font-bold'
                style={{ color: 'var(--title-color)' }}
            >
                Our Grocery
            </h1>
            <p className='py-6 mx-auto w-1/2 text-[#253d4e] font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                mollitia culpa hic distinctio rem accusamus ad ratione ab!
                Incidunt, voluptates.
            </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-5 mx-10'>
                <div className='card w-full bg-white-500 rounded-xl shadow-lg hover:shadow-2xl hover:duration-300'>
                    <figure>
                        <img
                            src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/product-2-1.jpg'
                            alt='Shoes'
                        />
                    </figure>
                    <div className='card-body'>
                        <div className='items-start'>
                            {/* Product Name */}
                            <h2 className='card-title text-start'>
                                All Natural Style Chicken Meatballs
                            </h2>
                            {/* Product Description  */}
                            <p className='font-medium text-start my-1'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odio, nobis!
                            </p>
                            {/* Supplier Name */}
                            <p className='font-semibold text-start'>
                                By{' '}
                                <span className='font-semibold text-[#3bb77e] hover:text-red-500 cursor-pointer transition duration-300'>
                                    Supplier Name
                                </span>
                            </p>
                            {/* Product Quantity */}
                            <p className='font-semibold my-1 text-start mb-0'>
                                item{' '}
                                <span className='text-lg font-semibold text-[#3bb77e]'>
                                    5
                                </span>
                            </p>
                        </div>
                        <div className='card-actions justify-between mt-0'>
                            {/* Product Price */}
                            <div className='mt-3'>
                                <p className='text-xl font-semibold text-[#3bb77e]'>
                                    Price $32
                                </p>
                            </div>
                            <div>
                                <button className='btn btn-primary'>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
