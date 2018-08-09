import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLanding } from '../../actions/landing'
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
	constructor(){
		super();
		this.state = {
			highlight: 'welcome',
			currentPage: 'welcome'
		}

		this.highlightFilter = this.highlightFilter.bind(this);
		this.changeHighlight = this.changeHighlight.bind(this);
	}

	highlightFilter(element) {
		return this.state.highlight === element ? "active" : ""
	}

	changeHighlight(element) {
		this.props.setLanding(element)
		this.setState({
			highlight: element,
			currentPage: element
		})
	}
		
	render(){
		
		return(
			<div id="navbar">
				<ul id="menu">
					<li className="logo" onClick={() => this.changeHighlight('welcome')}><Link to="/"><img id="logo" src={require('./logo.png')}/></Link></li>
					<li className={this.highlightFilter('about')} onClick={() => this.changeHighlight('about')}><Link to="/">About</Link></li>
					<li className={this.highlightFilter('events')} onClick={() => this.changeHighlight('events')}><Link to="/">Events</Link></li>
					<li className={this.highlightFilter('achievements')} onClick={() => this.changeHighlight('achievements')}><Link to="/">Achievements</Link></li>
					<li className={this.highlightFilter('projects')} onClick={() => this.changeHighlight('projects')}><Link to="/">Projects</Link></li>
					<li className={this.highlightFilter('team')} onClick={() => this.changeHighlight('team')}><Link to="/team">Team</Link></li>
					<li className={this.highlightFilter('contact')} onClick={() => this.changeHighlight('contact')}><Link to="/">Contact</Link></li>
				</ul>
			</div>
			)
	}

}

const mapStateToProps = (state) => {
	return {
		landing_page: state.landing.page
	}
}

const mapDispatchToProps = {
	setLanding
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);