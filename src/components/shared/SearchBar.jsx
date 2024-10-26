import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {JobKeywords} from '../../utils/SearchKeywords'
import {LocationKeywords} from '../../utils/SearchKeywords'

export default function SearchBar() {

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
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const searchJobHandler = () => {
    // dispatch(setSearchedQuery(query));
    // navigate("/browse");
  }

  return (
    <div className="flex justify-center items-center w-full mt-6">
    {/* Container for search bar */}
    <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md w-3/4 p-2">
      {/* Search for Keywords */} 
      <div className="flex-grow pl-4 border-e-2">
        <ReactSearchAutocomplete
          items={searchableItemObj}
          onSearch={handleOnSearch}
          showIcon={false}
          formatResult={formatResult}
          // onSelect={handleOnSelect}
          autoFocus
          placeholder="Enter skills / designations / companies"
          styling={{
            position:"relative",
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

      {/* Search for Location */}
      <div className="flex-grow pl-4">
        <ReactSearchAutocomplete
          items={locationItemObj}
          onSearch={handleOnSearch}
          showIcon={false}
          formatResult={formatResult}
          // onSelect={handleOnSelect}
          placeholder="Enter location"
          styling={{
            position:"relative",
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

      {/* Search Button */}
      <div className="px-4">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full">
          Search
        </button>
      </div>
    </div>
  </div>
  )
}

    // <div className='flex w-[40%] items-center gap-4 mx-auto'>
    //   <div style={{ width: 1000 }}>
    //     <ReactSearchAutocomplete
    //       items={searchableItemObj}
    //       onSearch={handleOnSearch}
    //       // onHover={handleOnHover}
    //       // onSelect={handleOnSelect}
    //       // onFocus={handleOnFocus}
    //       formatResult={formatResult} 
    //     />
    //      <ReactSearchAutocomplete
    //       items={searchableItemObj}
    //       onSearch={handleOnSearch}
    //       // onHover={handleOnHover}
    //       // onSelect={handleOnSelect}
    //       // onFocus={handleOnFocus}
    //       formatResult={formatResult}
    //     />  
    //   </div>
    // </div>