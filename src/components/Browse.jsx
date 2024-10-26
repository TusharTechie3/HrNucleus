import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import SearchBar from './shared/SearchBar';
import { allJobs } from '@/utils/JobsJson';

// const randomJobs = [1, 2,45];

const Browse = () => {

    return (
        <div>
            <Navbar />
            <SearchBar/>    
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length}) : Neurology, Delhi</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse