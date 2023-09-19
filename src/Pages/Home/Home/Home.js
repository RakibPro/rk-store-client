import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

function Home() {
    return (
        <div className='max-w-[1440px] mx-auto '>
            <Banner />
            <Inventory />
        </div>
    );
}

export default Home;
