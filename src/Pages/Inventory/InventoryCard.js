import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const InventoryCard = ({ product }) => {
    const { _id, name, description, img, price, quantity, supplierName } =
        product;
    console.log(product);

    return (
        <motion.div
            initial={{
                y: 200,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{ once: true }}
            className='card bg-white rounded-xl border hover:border-[#bce3c9] hover:shadow-[0_30px_30px_rgba(0,0,0,.14)] transition-all ease-out hover:duration-500'
        >
            <figure>
                <motion.img
                    whileHover={{ scale: 1.2 }}
                    transition={{
                        duration: 0.5,
                    }}
                    src={img}
                    alt='product'
                    className='h-[250px] w-[250px]'
                />
            </figure>
            <div className='card-body'>
                <div className='items-start'>
                    {/* Product Name */}
                    <h2 className='card-title text-start'>{name}</h2>
                    {/* Product Description  */}
                    <p className='font-medium text-start my-2'>{description}</p>
                    {/* Supplier Name */}
                    <p className='font-semibold text-start'>
                        By{' '}
                        <span className='font-semibold text-[#3bb77e] hover:text-red-500 cursor-pointer transition-all duration-300'>
                            {supplierName}
                        </span>
                    </p>
                    {/* Product Quantity */}
                    <p className='font-semibold mt-2 text-start mb-0'>
                        <span className='text-lg font-semibold text-[#3bb77e]'>
                            {quantity}
                        </span>{' '}
                        in stock
                    </p>
                </div>
                <div className='card-actions justify-between mt-0'>
                    {/* Product Price */}
                    <div className='mt-3'>
                        <p className='text-xl font-semibold text-[#3bb77e]'>
                            Price ${price}
                        </p>
                    </div>
                    <Link to={`/inventory/${_id}`}>
                        <PrimaryButton>Update</PrimaryButton>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default InventoryCard;
