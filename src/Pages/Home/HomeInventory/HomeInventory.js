import React from 'react';
import InventoryCard from '../../Inventory/InventoryCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Inventories = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/inventory');
                const data = await res.json();
                return data;
            } catch (error) {}
        },
    });

    if (isLoading) {
        return <Loading />;
    }
    return (
        <section className='text-center pb-10'>
            <h1 className='text-5xl py-5 mt-10 font-bold text-[#253d4e]'>
                Our Grocery
            </h1>
            <p className='py-6 mx-auto w-1/2 text-[#253d4e] font-medium'>
                Explore fresh, flavorful groceries online. Shop top-quality
                produce, pantry essentials, and more. Your go-to source for
                convenient, tasty living.
            </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-5 mx-10'>
                {products?.slice(0, 6).map((product, i) => (
                    <InventoryCard key={i} product={product}></InventoryCard>
                ))}
            </div>
            <div className='flex justify-center lg:justify-end lg:mr-10'>
                <Link
                    to='/inventory'
                    className='flex font-bold text-[#253d4e] hover:text-[#3bb77e] transition-all duration-200'
                >
                    See all product
                    <FaArrowRight className='mt-[5px] ml-1' />
                </Link>
            </div>
        </section>
    );
};

export default Inventories;
