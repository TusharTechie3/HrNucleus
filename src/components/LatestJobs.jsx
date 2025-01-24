import React, { useContext, useEffect } from "react";
import Job from "./Job";
import { GlobalContext } from "@/context";

const LatestJobs = () => {
  const { latestJobs } = useContext(GlobalContext);

  console.log("latestJobs", latestJobs);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {latestJobs?.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          latestJobs?.map((job, i) => <Job key={i} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
