import React, { useEffect, useState } from 'react';
import InventoryCard from '../../Inventory/InventoryCard';

const Inventories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/inventory';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <section className='text-center pb-10'>
            <h1
                className='text-5xl py-5 mt-10 font-bold'
                style={{ color: 'var(--title-color)' }}
            >
                Our Grocery
            </h1>
            <p className='py-6 mx-auto w-1/2 text-[#253d4e] font-medium'>
                We hame very good organic grocery products.
            </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-5 mx-10'>
                {products.slice(0, 6).map((product, i) => (
                    <InventoryCard key={i} product={product}></InventoryCard>
                ))}
            </div>
        </section>
    );
};

export default Inventories;
