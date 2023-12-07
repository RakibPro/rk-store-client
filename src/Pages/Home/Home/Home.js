import React from 'react';
import Banner from '../Banner/Banner';
import HomeInventories from '../HomeInventory/HomeInventory';
import GetApp from '../GetApp/GetApp';
import ContactUs from '../ContactUs/ContactUs';

function Home() {
    return (
        <div>
            <Banner />
            <HomeInventories />
            <GetApp />
            <ContactUs />
        </div>
    );
}

export default Home;
