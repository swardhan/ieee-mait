import React, {Component} from 'react';
import './Events.css';

class Events extends Component {
	constructor(){
		super();
		this.state = {
			current: 2017
		}

		this.findYear = this.findYear.bind(this);
		this.eventCreator = this.eventCreator.bind(this);
	}

	findYear = (year) => {
		return this.state.current === year ? "selected": "not-selected"
	}

	eventCreator = (year) => {
		return(
				<div className="event">
					<img src={require('./events.png')} />
					<div className="event-overlay">
						<div className="content">
							<p className="name">IEEE DAY</p>
							<p className="date">October 6, {year}</p>
						</div>
					</div>
				</div>
			)
		
	}

	render() {
		let arr = [];
		for(let i=0; i< 10; i++){
			arr.push(this.eventCreator(this.state.current))
		}
		return(
				<div className="overlay events-container">
					<div className="grid">
						<div className="header">
                        	<div className={this.findYear(2016)} onClick = {() => this.setState({current: 2016})}><span>2016</span></div>
                        	<div className={this.findYear(2017)} onClick = {() => this.setState({current: 2017})}><span>2017</span></div>
                        	<div className={this.findYear(2018)} onClick = {() => this.setState({current: 2018})}><span>2018</span></div>
						</div>
						{arr}
					</div>
				</div>
			)
	}
}

export default Events;