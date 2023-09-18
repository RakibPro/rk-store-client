import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className=' p-10 bg-[#f4f6fa]'>
            <div className='footer'>
                <nav>
                    <header className='font-bold text-xl text-[#253d4e]'>
                        Company
                    </header>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Delivery Information
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Support Center
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Careers
                    </Link>
                </nav>
                <nav>
                    <header className='font-bold text-xl text-[#253d4e]'>
                        About
                    </header>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Contact Us
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Information
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        About Us
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Careers
                    </Link>
                </nav>
                <nav>
                    <header className='font-bold text-xl text-[#253d4e]'>
                        Help
                    </header>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Cancellation & Returns
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Report Infringement
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Payments
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Shipping
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        FAQ
                    </Link>
                </nav>
                <nav>
                    <header className='font-bold text-xl text-[#253d4e]'>
                        Policy
                    </header>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Return Policy
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Terms Of Use
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Security
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Privacy
                    </Link>
                    <Link
                        to='/'
                        className='font-bold text-[15px] text-[#253d4e] hover:text-[#3bb77e] transition duration-300 '
                    >
                        Sitemap
                    </Link>
                </nav>
            </div>
            <div className='text-center font-semibold  text-[#253d4e] mt-14'>
                <p>Copyright © 2023, RK-Store - All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
