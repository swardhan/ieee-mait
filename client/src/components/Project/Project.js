import React, {Component} from 'react';
import './Project.css';

class Project extends Component {
	render() {
		return(
				<div className="overlay projects-container">
					<div className="grid">
						<div className="header">
							<p>PROJECTS BY IEEE MAIT MEMBERS</p>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
						<div className="project">
							<img src={require('./project.png')} />
							<div className="project-overlay">
								<div className="content">
									<p className="name">Rove</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}
}

export default Project;