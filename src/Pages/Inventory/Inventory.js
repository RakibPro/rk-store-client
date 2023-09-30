import React, { useEffect, useState } from 'react';
import InventoryCard from './InventoryCard';

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
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-5 mx-10'>
                {products.map((product, i) => (
                    <InventoryCard key={i} product={product}></InventoryCard>
                ))}
            </div>
        </section>
    );
};

export default Inventories;
