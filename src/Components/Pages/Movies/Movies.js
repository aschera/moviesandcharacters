import React from 'react'
import './movies.scss'
import MovieListItem from '../../UI/MovieListItem/MovieListItem'
import SingleMovie from './SingleMovie/SingleMovie'
import Loading from '../../UI/Loading/Loading'
import axios from "axios";

class Movies extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.triggerState = this.triggerState.bind(this)
		this.state = {
			data: [],
			loading: false,
			singleMovie: []
		  };
	}

	fetchData(){
		axios
		.get("https://swapi.co/api/films")
		.then(response => {
			// create an array of data only with relevant data
			const newdata = response.data.results.map(c => {
				return c;
			});

			// create a new "State" object without mutating
			// the original State object.
			const newState = Object.assign({}, this.state, {
				data: newdata,
			});
			// store the new state object in the component's state
			this.setState(newState);

			// add data to local storage
			localStorage.setItem('Movies', JSON.stringify(response.data.results));
		})
		.catch(error => console.log(error));
	};

	// update state with info on the clicked movie
	triggerState(singleMovie){
		if(singleMovie) {
			this.setState({
				singleMovie,
			});
		}
		else {
			this.setState({
				singleMovie: []
			});
		}

	};

	componentDidMount() {

		// getting data from local storage
		var retrievedObject = localStorage.getItem('Movies');
		retrievedObject = JSON.parse(retrievedObject)

		if(retrievedObject){
			console.log('Movie data fetched from local storage');
			const newState = Object.assign({}, this.state, {
				data: retrievedObject
				});
			this.setState(newState);
		}
		else {
			console.log('Movie data fetched from api');
			this.fetchData();
		}
	}

	render() {
	  return (<div className="page" id="movies">
		<h1>Movies</h1>
		{this.state.data.length < 1 && <Loading />}


		<div className="movieList">
			{ this.state.data.map((singleMovie, index) => <MovieListItem
				key={ index }
				triggerState = { this.triggerState }
				singleMovie = { singleMovie }
				episodeId={ singleMovie.episode_id }
				title={ singleMovie.title }
				releaseDate={ singleMovie.release_date }
			/>)
			}
		</div>

		{
		this.state.singleMovie.title &&
		<div className="singleMovie">
			<SingleMovie movie = { this.state.singleMovie } triggerState = { this.triggerState }/>
		</div>
		}

	</div>
	  );
	}
  }

  export default Movies;
