import React from "react"

const Search = ({ searchValue, setSearchValue }) => {

  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-lg">Liability Search</h1>
      <div className="w-full">
        <input className="text-center w-full border" type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search
