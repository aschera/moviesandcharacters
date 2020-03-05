import React from 'react'

const MovieListItem = (props) => {

	const {
		singleMovie,
		episodeId,
		title,
		releaseDate
	} = props

	// pass on the click ID of this particular movie
	const click = function(){
		props.triggerState(singleMovie);
	}

	return <div className="movieListItem" onClick={click}>
		<h4>Espiode { episodeId }</h4>
		<h2>{ title }</h2>
		<p>Released { releaseDate }</p>
	</div>
}

export default MovieListItem
