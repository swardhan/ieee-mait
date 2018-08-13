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
					<li className="logo"><Link to="/" onClick={() => this.changeHighlight('welcome')}><img id="logo" src={require('./logo.png')}/></Link></li>
					<li className={this.highlightFilter('about')}><Link to="/" onClick={() => this.changeHighlight('about')}>About</Link></li>
					<li className={this.highlightFilter('events')}><Link to="/" onClick={() => this.changeHighlight('events')}>Events</Link></li>
					<li className={this.highlightFilter('achievements')}><Link to="/"  onClick={() => this.changeHighlight('achievements')}>Achievements</Link></li>
					<li className={this.highlightFilter('projects')}><Link to="/" onClick={() => this.changeHighlight('projects')}>Projects</Link></li>
					<li className={this.highlightFilter('team')}><Link to="/team" onClick={() => this.changeHighlight('team')}>Team</Link></li>
					<li className={this.highlightFilter('contact')}><Link to="/" onClick={() => this.changeHighlight('contact')}>Contact</Link></li>
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