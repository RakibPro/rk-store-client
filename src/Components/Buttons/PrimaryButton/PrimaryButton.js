import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button
            className='btn btn-sm md:btn-md text-white border-none tracking-widest
         font-bold bg-[#3bb77e] hover:bg-[#fdc040] hover:text-black transition-all duration-300'
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
