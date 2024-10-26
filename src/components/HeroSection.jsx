import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './shared/SearchBar';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchJobHandler = () => {
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <SearchBar/>
            </div>
        </div>
    )
}

export default HeroSection