import React from 'react'
import SearchBar from './shared/SearchBar';

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10 px-4 sm:px-6 md:px-8'>
                {/* Optional slogan */}
                {/* <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>
                    No. 1 Job Hunt Website
                </span> */}

                {/* Main title */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                    The Nuclei Of <br /> 
                    <span className='text-[#ff0000]'>HealthCare</span> Recruitment
                </h1>

                {/* Subheading */}
                <p className='text-lg sm:text-xl md:text-2xl mt-4'>
                    You devote yourself to others, <br />
                    We devote our resources to you
                </p>

                {/* Search bar */}
                <SearchBar />
            </div>
        </div>
    )
}

export default HeroSection
