import React, {Component} from 'react';
import './KnowIEEE.css';

class KnowIEEE extends Component {
	render(){
		return(
				<div className="overlay about-container">
					<div className="grid">
						<div className="main">
							<div className="logo">
								<img src={require('./logo.png')} />
								<img src={require('./head.png')} />
							</div>
							<div className="byline">Advancing Technology for Humanity</div>
						</div>
						<div className="xplore comp">IEEE Xplore Digital Library</div>
						<div className="publications comp">IEEE Publications</div>
						<div className="conf comp">IEEE Conferences</div>
						<div className="communities comp">IEEE Communities</div>
						<div className="collabratec comp">IEEE Collabratec</div>
						<div className="tv comp">IEEE TV</div>
						<div className="logo-footer">
							<img src={require('./ct.png')} />
							<img src={require('./fb.png')} />
							<img src={require('./google-plus.png')} />
							<img src={require('./insta.png')} />
							<img src={require('./linkedin.png')} />
							<img src={require('./twitter.png')} />
							<img src={require('./yt.png')} />
						</div>
					</div>
				</div>
			)
	}
}

export default KnowIEEE;