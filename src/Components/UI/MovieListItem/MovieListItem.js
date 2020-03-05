import React from 'react'

const MovieListItem = (props) => {

	const {
		singleMovie,
		episodeId,
		title,
		releaseDate
	} = props

	// open popup.
	const openMovieInfo = function(){
		props.triggerState(singleMovie);
	}

	return <div className="movieListItem" onClick={openMovieInfo}>
		<h4>Espiode { episodeId }</h4>
		<h2>{ title }</h2>
		<p>Released { releaseDate }</p>
	</div>
}

export default MovieListItem
