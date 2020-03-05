import React from 'react'

const SingleMovie = (props) => {
	const { movie } = props

	return <div className="singleMovie">

		<h1>Single Movie</h1>
		<h1>{ movie.title }</h1>
		<p>Episode { movie.episode_id }, released { movie.release_date }.</p>
		<p><strong>Director:</strong> { movie.director }.</p>
		<p><strong>Producer(s):</strong> { movie.producer }</p>

		<p>{ movie.opening_crawl }</p>

		<button>Back</button>
	</div>
}

export default SingleMovie
