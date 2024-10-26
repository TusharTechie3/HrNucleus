import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { motion } from 'framer-motion';
import SearchBar from './shared/SearchBar';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    // const { allJobs, searchedQuery } = useSelector(store => store.job);
    
    const searchedQuery="Nuero";
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
   
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />

            <div className='mx-auto mt-5'>
                <div className="mb-5">
                    <SearchBar/>

                </div>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}

export default Jobs