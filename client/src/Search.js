import React from "react"

function Search({ search, setSearch }) {
	return (
		<div className="searchContainer">
			<input
				className="searchArea"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="search users"
			></input>
		</div>
	)
}

export default Search
