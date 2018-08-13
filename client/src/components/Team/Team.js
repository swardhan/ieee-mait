import React, { Component } from 'react';
import './Team.css'

class Team extends Component{
	constructor(){
		super();
		this.state = {
			current: 'execom'
		}
		this.execom = this.execom.bind(this);
		this.extendedExecom = this.extendedExecom.bind(this);
		this.execomNav = this.execomNav.bind(this);
		this.extendedExecomNav = this.extendedExecomNav.bind(this);
		this.findNav = this.findNav.bind(this);
		this.findCurrent = this.findCurrent.bind(this);
	}


	execom = () => {
		return(
				<div className="execom">
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Dr. Monika Gupta</p>
						<p className="designation">Branch Counsellor</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Samraj Agarwal</p>
						<p className="designation">Chairperson</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Deepanshu Gupta</p>
						<p className="designation">Vice-Chairperson</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Srishti</p>
						<p className="designation">WIE Chairperson</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Suyash Ahluwalia</p>
						<p className="designation">General Secretary</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Aman Mittal</p>
						<p className="designation">Treasurer</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Tamal Dey</p>
						<p className="designation">PR Executive</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Rohin Bhandari</p>
						<p className="designation">Technical Coordinator</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Gaurav Mongia</p>
						<p className="designation">Joint Secretary</p>
					</div>
					<div className="member">
						<img src={require('./member.png')} />
						<p className="name">Tanish Goyal</p>
						<p className="designation">WIE Vice-Chairperson</p>
					</div>
				</div>
			)
	}

	extendedExecom = () => {
		return(
				<div className="extended-execom">
					<div className="member">
						<div className="designation">
							Editorial Lead
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="name">Saumya Wardhan</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Design Head
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="name"	>Tejaswi Kapoor</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Social Media Head
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="name">Saumya Wardhan</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Internal Affairs Coordinator
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="name">Saumya Wardhan</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							External Affairs Coordinator
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="name"	>Tejaswi Kapoor</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Technical Coordinator
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="name"	>Saumya Wardhan</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Promotional Squad
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="title">Promotional Squad</p>
								<p className="name">Saumya Wardhan</p>
								<p className="name"	>Tejaswi Kapoor</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Website Developers
						</div>
						<div className="ext-overlay">
							<div className="content">
								<p className="title">Website Developers</p>
								<p className="name">Saumya Wardhan</p>
								<p className="name"	>Tejaswi Kapoor</p>
							</div>
						</div>
					</div>
					<div className="member">
						<div className="designation">
							Membership Coordinators
						</div>
						<div className="ext-overlay">
							<div className="content">
							<p className="title">Membership Coordinators</p>
							<p className="name">Saumya Wardhan</p>
							<p className="name"	>Tejaswi Kapoor</p>
						</div>
						</div>
					</div>
				</div>
			)
	}

	execomNav = () => {
		return(
				<div className="team-nav">
					<div className="one"></div>
					<div className="two selected"><p>EXECOM</p></div>
					<div className="three not-selected"><p onClick={() => this.setState({current: 'extended-execom'})}>EXTENDED EXECOM</p></div>
				</div>
			)
	}

	extendedExecomNav = () => {
				return (
						<div className="team-nav">
							<div className="one not-selected"><p  onClick={() => this.setState({current: 'execom'})}>EXECOM</p></div>
							<div className="two selected"><p>EXTENDED EXECOM</p></div>
							<div className="three"></div>
						</div>
					)
	}

	findCurrent = () => {
		return this.state.current === 'execom' ? this.execom(): this.extendedExecom()
	}

	findNav = () => {
		return this.state.current === 'execom' ? this.execomNav(): this.extendedExecomNav()
	}

	render(){

		return(
				<div className="overlay team-container">
					<div className="grid">
						{this.findNav()}
						{this.findCurrent()}
					</div>
				</div>
			)
	}
}

export default Team;