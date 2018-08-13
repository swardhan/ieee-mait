import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Team from './Team/Team'
import KnowIEEE from './KnowIEEE/KnowIEEE'

class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<Header/>
					<Route exact path='/' component={Landing}/>
					<Route exact path='/team' component={Team}/>
					<Route exact path='/about' component={KnowIEEE}/>
				</div>
			</BrowserRouter>
			)
	}
}

export default connect(null, null)(App);
