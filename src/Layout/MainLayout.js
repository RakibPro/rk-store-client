import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

function MainLayout() {
    return (
        <main className='max-w-[1440px] mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
}

export default MainLayout;
