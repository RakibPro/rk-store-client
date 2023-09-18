import React, { useEffect, useState } from 'react';
import Banner1 from '../../../Assets/Images/BannerImage/Banner1.jpg';
import Banner2 from '../../../Assets/Images/BannerImage/Banner2.jpg';
import Banner3 from '../../../Assets/Images/BannerImage/Banner3.jpg';
import Banner4 from '../../../Assets/Images/BannerImage/Banner4.jpg';
import Banner5 from '../../../Assets/Images/BannerImage/Banner5.jpg';
import Banner6 from '../../../Assets/Images/BannerImage/Banner6.jpg';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton/PrimaryButton';

function Banner() {
    const [currentImage, setCurrentImage] = useState(0);

    const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === bannerImages.length - 1 ? 0 : prevImage + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <div
            className='hero min-h-[500px] bg-cover bg-center bg-no-repeat transition-all duration-500'
            style={{
                backgroundImage: `url(${bannerImages[currentImage]})`,
            }}
        >
            <div className='hero-overlay bg-black bg-opacity-60'></div>
            <div className='hero-content text-center text-white'>
                <div className='max-w-3xl'>
                    <h1 className='mb-5 text-7xl font-bold tracking-wide '>
                        Organic Grocery
                    </h1>
                    <p className='mb-5 font-medium mx-10'>
                        Welcome to RK-Store, where quality meets convenience.
                        Our store is dedicated to providing you with the
                        freshest and finest selection of groceries. We source
                        locally whenever possible, ensuring you get the best of
                        your community's produce.
                    </p>
                    <PrimaryButton>Explore</PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default Banner;
