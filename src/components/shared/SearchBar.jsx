import React, { useContext, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { JobKeywords } from "../../utils/SearchKeywords";
import { LocationKeywords } from "../../utils/SearchKeywords";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@/context";
import { Button } from "../ui/button";

export default function SearchBar() {
  const { setSearchObj } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [jobKeyword, setJobKeyword] = useState("");
  const [locationKeyword, setlocationKeyword] = useState("");
  const [error, setError] = useState(false);

  const searchableItemObj = JobKeywords.map((item, i) => ({
    id: i,
    name: item,
  }));

  const locationItemObj = LocationKeywords.map((item, i) => ({
    id: i,
    name: item,
  }));

  const formatResult = (item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
    );
  };

  const searchJobHandler = () => {
    if (jobKeyword.trim() == "") {
      setError(true);
    } else {
      setSearchObj({
        keyword: jobKeyword,
        location: locationKeyword,
      });
      setError(false);
      navigate("/browse");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full mt-6">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md w-[800px] p-2">
          {/* Search for Keywords */}
          <div className="flex-grow pl-4 border-e-2">
            <ReactSearchAutocomplete
              items={searchableItemObj}
              // onSearch={handleOnSearch}
              showIcon={false}
              formatResult={formatResult}
              onSelect={(e) => setJobKeyword(e.name)}
              onSearch={(e) => setJobKeyword(e)}
              autoFocus
              placeholder="Enter speciality"
              styling={{
                position: "relative",
                border: "none",
                boxShadow: "none",
                fontSize: "17px",
                iconColor: "#bbb",
                color: "#333",
                placeholderColor: "#999",
                borderRadius: "0",
                zIndex: "10",
              }}
            />
          </div>

          {/* Search for Location */}
          <div className="flex-grow pl-4">
            <ReactSearchAutocomplete
              items={locationItemObj}
              showIcon={false}
              formatResult={formatResult}
              onSelect={(e) => setlocationKeyword(e.name)}
              onSearch={(e) => setlocationKeyword(e)}
              placeholder="Enter location"
              styling={{
                position: "relative",
                border: "none",
                boxShadow: "none",
                fontSize: "17px",
                iconColor: "#bbb",
                color: "#333",
                placeholderColor: "#999",
                borderRadius: "0",
              }}
            />
          </div>

          <div className="px-4">
            <Button
              className="bg-[#6A38C2] text-white py-2 px-6 rounded-full"
              onClick={searchJobHandler}
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      {error && <p  style={{ color:"red"}}>You must enter a speciality</p>}
    </div>
  );
}

// {
//   position: relative;
//   top: 13px;
//   height: 0px;
//   left: -215px;
//   color: red;
// }
