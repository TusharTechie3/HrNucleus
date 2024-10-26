import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import SearchBar from './shared/SearchBar';

// const randomJobs = [1, 2,45];

const Browse = () => {
    useGetAllJobs();
    // const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])

    
    const allJobs= [
        {
            id:1,
            company:{ name:"HR Nucleus",logo:"https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp"},
            title: "Nuerosurgeon",
            description:"Some random description to show that we can show description section as well, multiline",
            position:"Position",
            jobType:"Hybrid",
            salary:"1.5",
            createdAt:"2024-10-22"
        },
        {
            id:1,
            company:{ name:"HR Nucleus",logo:"https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp"},
            title: "Nuerosurgeon",
            description:"Some random description to show that we can show description section as well, multiline",
            position:"Position",
            jobType:"Hybrid",
            salary:"1.5",
            createdAt:"2024-10-22"
        },
        {
            id:1,
            company:{ name:"HR Nucleus",logo:"https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp"},
            title: "Nuerosurgeon",
            description:"Some random description to show that we can show description section as well, multiline",
            position:"Position",
            jobType:"Hybrid",
            salary:"1.5",
            createdAt:"2024-10-22"
        },
        {
            id:1,
            company:{ name:"HR Nucleus",logo:"https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp"},
            title: "Nuerosurgeon",
            description:"Some random description to show that we can show description section as well, multiline",
            position:"Position",
            jobType:"Hybrid",
            salary:"1.5",
            createdAt:"2024-10-22"
        }

];

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