import React from 'react';
import AppsBanner from '../../../Assets/Images/AppsBanner/AppsBanner.png';
import AppsStore from '../../../Assets/Images/AppsBanner/app-store.png';
import PlayStore from '../../../Assets/Images/AppsBanner/google-play.png';

const GetApp = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${AppsBanner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '410px',
            }}
        >
            <div className='text-center lg:text-left pt-20 px-14 lg:pt-16 lg:pl-24 lg:w-1/2'>
                <h1 className='text-2xl lg:text-5xl font-bold lg:leading-[55px]'>
                    Get our app and make your life more easier
                </h1>
                <p className='font-semibold text-gray-500 pt-5 leading-7 w-[90%] mx-auto lg:mx-0'>
                    Explore endless aisles at RK-Store: Your one-stop grocery
                    destination! Download our app for seamless shopping and
                    exclusive deals today.
                </p>
                <div className='flex gap-7 pt-7 justify-center lg:justify-start'>
                    <img
                        src={AppsStore}
                        alt='appsstore'
                        className='h-12 lg:h-14 cursor-pointer hover:transform hover:-translate-y-1 transition-all'
                    />
                    <img
                        src={PlayStore}
                        alt='playstore'
                        className='h-12 lg:h-14 cursor-pointer hover:transform hover:-translate-y-1 transition-all'
                    />
                </div>
            </div>
        </section>
    );
};

export default GetApp;
