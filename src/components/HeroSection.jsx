import React from 'react'
import SearchBar from './shared/SearchBar';

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                {/* <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span> */}
                <h1 className='text-5xl font-bold'>The Nuclei Of <br /> 
                    <span className='text-[#ff0000]'>HealthCare</span>  Recruitment
                    </h1>
                    <p>You devote yourself to others
                    We devote our resources to you  </p>
                <SearchBar />
            </div>
        </div>
    )
}

export default HeroSection