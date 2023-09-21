import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

function MainLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
}

export default MainLayout;
