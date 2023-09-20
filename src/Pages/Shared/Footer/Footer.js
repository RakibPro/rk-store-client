import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

function Footer() {
    return (
        <footer className=' p-10 bg-[#f4f6fa] max-w-[1440px] mx-auto'>
            <ScrollToTop
                smooth
                top='600'
                color='#3bb77e'
                height='50'
                width='50'
                viewBox='0 0 512 512'
                svgPath='M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z'
                style={{
                    background: 'transparent',
                    boxShadow: 'none',
                }}
            />
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
