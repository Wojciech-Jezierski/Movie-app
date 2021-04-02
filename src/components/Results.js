import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{results 
				? results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			)) : <h2>This name doesn't exist in the database.</h2>}
		</section>
	)
}

export default Results