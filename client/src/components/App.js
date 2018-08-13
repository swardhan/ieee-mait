import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Team from './Team/Team';
import KnowIEEE from './KnowIEEE/KnowIEEE';
import Project from './Project/Project';
import Events from './Events/Events';
import Achievements from './Achievements/Achievements';

class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<Header/>
					<Route exact path='/' component={Landing} />
					<Route exact path='/team' component={Team} />
					<Route exact path='/about-ieee' component={KnowIEEE} />
					<Route exact path='/projects' component={Project} />
					<Route exact path='/events' component={Events} />
					<Route exact path= '/achievements' render={() => <Achievements current="ieee" />} />
					<Route exact path= '/achievements/ieee' render={() => <Achievements current="ieee" />} />
					<Route exact path= '/achievements/other' render={() => <Achievements current="other" />} />
				</div>
			</BrowserRouter>
			)
	}
}

export default connect(null, null)(App);
