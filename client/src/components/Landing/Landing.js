import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Landing.css'
import main_landing from './main_landing.png';
import projects_landing from './projects_landing.png';
import events_landing from './events_landing.png';
import achievements_landing from './achievements_landing.png';
import about_landing from './about_landing.png';
import contact_landing from './contact_landing.png';

const Welcome = () => {
	return (
	<div className="welcome-grid">
		<div className="content">
			<p className="welcome-p">WELCOME TO</p>
			<p className="welcome-ieee"><span>IEEE</span> MAIT</p>
			<p className="welcome-p1">Join us on our incredible journey towards</p>
			<p className="welcome-p2">Advancing Technology for Humanity...</p>
		</div>
		<div className="join-btn ">
			JOIN US
		</div>
	</div>
		)
}

const Contact = () => {
	return(
			<div className="contact-grid">
				<div className="contact-main">
					<div className="heading">CONTACT US</div>
					<div className="byline">Let us Work Together</div>
				</div>
				<div className="contact-form">
					<form>
						<input type="text" placeholder="Name"/>
						<input type="text" placeholder="Email Id"/>
						<input type="text" placeholder="Subject"/>
						<input type="text" placeholder="Message"/>
					</form>
					<div className="connect-btn ">
						Connect
					</div>
				</div>
				<div className="address">
					<img src={require('./map.svg')} />
					<div>
						Maharaja Agrasen Institute of Technology <br/>Rohini, Sector-22, New Delhi- 110068
					</div>
				</div>
				<div className="call-us">
					<div className="head">Call us at:</div>
					<div className="phone">
						<img src={require('./phone.svg')} />
						<div>
							Tamal Dey: 99999451699<br/>
							Gaurav Nigam: 99999451699
						</div>
					</div>
				</div>
				<div className="meet-us">
					<div className="head">
						Meet us at:
					</div>
					<div className="links">
						<img src={require('./fb.png')}/>
						<img src={require('./insta.png')}/>
						<img src={require('./linkedin.png')}/>
					</div>
				</div>
			</div>
		)
}

const About = () => {
	return (
			<div className="about-grid">
				<div className="know-ieee-mait">
					<p className="heading">
						<Link to="/about-ieee-mait" style={{ textDecoration: 'none', color: 'white' }}>KNOW IEEE MAIT</Link>
					</p>
					<p className="byline">Playground of Innovations</p>
				</div>
				<div className="know-ieee">
					<p className="heading"><Link to="/about-ieee" style={{ textDecoration: 'none', color: 'white' }}>KNOW ABOUT IEEE</Link></p>
					<p className="byline">Advancing Technology for Humanity</p>
				</div>
			</div>
		)
}

const Achievements = () => {
	return (
		<div className="achievements-grid">
			<div className="achievements-main">
				<div className="heading">ACHIEVEMENTS</div>
				<div className="byline">IEEE MAIT has always provided the platform to its member to engage and create something worthy</div>
			</div>
			<div className="under-ieee"><Link to="/achievements/ieee" style={{ textDecoration: 'none', color: 'white' }}>ACHIEVEMENTS UNDER IEEE</Link></div>
			<div className="other"><Link to="/achievements/other" style={{ textDecoration: 'none', color: 'white' }}>VARIOUS OTHER ACHIEVEMENTS</Link></div>
		</div>
		)
}

const Projects = () => {
	return (
		<div className="projects-grid">
			<div className="project-main">
				<div className="heading">PROJECTS</div>
				<div className="byline">Amazing blend of knowledge and talent</div>
			</div>
			<div className="projects-link">
				<Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>VARIOUS PROJECTS BY OUR MEMBERS</Link>
			</div>
		</div>
		)
}

const Events = () => {
	return (
		<div className="events-grid">
			<div className="events-main">
				<div className="heading">EVENTS</div>
				<div className="byline">Each year IEEE MAIT conducts and <br/> participates in a plethora of events...</div>
			</div>
			<div className="events-link">
				<Link to="/events" style={{ textDecoration: 'none', color: 'white' }}>VIEW OUR EVENTS</Link>
			</div>
		</div>
		)
}

class Landing extends Component {

	render() {
		let temp, landing_bg;

		switch(this.props.landing_page){
			case 'welcome':
				temp = < Welcome />;
				landing_bg = main_landing;
				break;
			case 'about':
				temp = < About />;
				landing_bg = about_landing;
				break;
			case 'events':
				temp = < Events />;
				landing_bg = events_landing;
				break;
			case 'achievements':
				temp = < Achievements />;
				landing_bg = achievements_landing;
				break;
			case 'projects':
				temp = < Projects />;
				landing_bg = projects_landing;
				break;
			case 'contact':
				temp = < Contact />;
				landing_bg = contact_landing;
				break;
		}

		return(
				<div className="overlay" style={ { backgroundImage: `url(${landing_bg})`, backgroundSize: `cover` } }>
					{ temp }
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		landing_page: state.landing.page
	}
}

export default connect(mapStateToProps, null)(Landing);