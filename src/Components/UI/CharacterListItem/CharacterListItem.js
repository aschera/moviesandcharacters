import React from 'react'

const CharacterListItem = (props) => {
	const { character } = props
	return <div className="characterListItem">
		<h2>{ character.name }</h2>
		<table className="character-data" ><tbody>
			<tr><td className="bold">Born</td><td>{ character.birth_year }</td></tr>
			<tr><td className="bold">Weight</td><td>{ character.weight }</td></tr>
			<tr><td className="bold">Height</td><td>{ character.height }</td></tr>
			<tr><td className="bold">Gender</td><td>{ character.gender }</td></tr>
		</tbody></table>
	</div>
}

export default CharacterListItem
