import React from 'react'
import './chars.scss'
import axios from "axios";
import CharacterListItem from '../../UI/CharacterListItem/CharacterListItem'
import Loading from '../../UI/Loading/Loading'

class Characters  extends React.Component {

	// default State object
	state = {
		data: [],
		loading: false
	};

	fetchData(){
		axios
		.get("https://swapi.co/api/people")
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
			localStorage.setItem('Characters', JSON.stringify(response.data.results));
		})
		.catch(error => console.log(error));
		};

	componentDidMount() {

		// getting data from local storage
		var retrievedObject = localStorage.getItem('Characters');
		retrievedObject = JSON.parse(retrievedObject)

		if(retrievedObject){
			console.log('Character data fetched from local storage');
			const newState = Object.assign({}, this.state, {
				data: retrievedObject
				});
			this.setState(newState);
		}
		else {
			console.log('Character data fetched from api');
			this.fetchData();
		}
	}
	render() {
		return <div className="page" id="characters">
		<h1>Characters</h1>
		{this.state.data.length < 1 && <Loading />}
		<div className="characterList">
			{ this.state.data.map((singleCharacter, index) => <CharacterListItem
				key={ index }
				character={ singleCharacter }
			/>) }
		</div>
	</div>
	}
}

export default Characters
