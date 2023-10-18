import React from 'react';
import InventoryCard from './InventoryCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';

const Inventories = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(
                    'https://rk-store-server.vercel.app/inventory'
                );
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
            <h1 className='text-5xl py-5 font-bold text-[#253d4e]'>
                All Products
            </h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-5 mx-10'>
                {products.map((product, i) => (
                    <InventoryCard key={i} product={product}></InventoryCard>
                ))}
            </div>
        </section>
    );
};

export default Inventories;
