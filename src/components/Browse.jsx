import React, { useContext, useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import SearchBar from "./shared/SearchBar";
import { GlobalContext } from "@/context";

const Browse = () => {
  const { searchObj, allJobs } = useContext(GlobalContext);
  const [searchResult, setSearchResult] = useState(allJobs);

  useEffect(() => {
    if (searchObj?.keyword) {
      filterJob();
    } else {
      setSearchResult(allJobs);
    }
  }, [searchObj]);

  const filterJob = () => {
    // Convert inputs to lowercase for case-insensitive filtering
    const lowerCaseKeyword = searchObj?.keyword.toLowerCase();
    const lowerCaseLocation = searchObj?.location.toLowerCase();

    // Filter jobs based on keyword
    let filtered = allJobs.filter((job) => {
      return job.title?.toLowerCase().includes(lowerCaseKeyword);
    });

    console.log("filtered result: ", filtered);
    // If location is provided, filter jobs that match both keyword and location
    if (searchObj?.location) {
      const jobsMatchingBoth = filtered.filter((job) =>
        job?.location?.toLowerCase().includes(lowerCaseLocation)
      );

      const jobsMatchingKeywordOnly = filtered.filter(
        (job) => !job?.location?.toLowerCase().includes(lowerCaseLocation)
      );

      // Show jobs matching both criteria first, followed by those matching keyword only
      filtered = [...jobsMatchingBoth, ...jobsMatchingKeywordOnly];
    }

    setSearchResult(filtered); // Update the filtered jobs state
  };

  console.log(searchObj);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({searchResult.length}) : {searchObj.keyword}
          {searchObj.location && `, ${searchObj.location}`}{" "}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {searchResult.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
