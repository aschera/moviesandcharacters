import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Characters from '../../Pages/Characters/Characters'
import Movies from '../../Pages/Movies/Movies'
import Home from '../../Pages/Home/Home'
import './navbar.scss'
import StarWarsLogo from '../../../img/SW.png'

const Navbar = (props) => {
	return <Router>
		<nav className="navbar">
			<div className="navbar-links">
				<div className="nav-left">
					<button className="home">
						<Link to="/">
							<img src={ StarWarsLogo } className="logo" alt="logo" />
						</Link>
					</button>
				</div>

				<div className="nav-right">
					<button className="navigate">
						<Link to="/Movies">
							Movies
						</Link>
					</button>
					<button className="navigate">
						<Link to="/Characters">
							Characters
						</Link>
					</button>
				</div>
			</div>

			<Switch>

				<Route exact path="/" component={Home}/>

				<Route path="/Movies" component={Movies}/>

				<Route path="/Characters" component={Characters}/>

        	</Switch>

		</nav>


	</Router>
}

export default Navbar
