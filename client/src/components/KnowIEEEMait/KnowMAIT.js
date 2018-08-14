import React, {Component} from 'react';
import './KnowMAIT.css';

class KnowMAIT extends Component {
	render(){
		return(
				<div className="mait-container">
					<div className="grid">
						<div className="image-container">
							<img src={require('./headImage.png')} />
							<div className="head-text">
								<p className="main">IEEE MAIT</p>
								<p className="byline">A Playground of Innovations</p>
							</div>
						</div>
						<div className="about-us">
							<div className="what">
								<p className="heading">What We Do?</p>
								<div className="desc">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Repudiandae autem, harum fugiat animi minus voluptates quisquam repellendus, 
									officia, natus neque iusto reprehenderit veritatis. Facilis blanditiis, voluptas,
									ipsam numquam voluptatibus a, odit praesentium magnam tempora deleniti iusto aliquam 
									molestias et exercitationem inventore? Ut delectus deserunt unde accusantium laboriosam,
									veniam, hic atque.
								</div>
							</div>
							<div className="why">
								<p className="heading">Why We Do?</p>
								<div className="desc">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Repudiandae autem, harum fugiat animi minus voluptates quisquam repellendus, 
									officia, natus neque iusto reprehenderit veritatis. Facilis blanditiis, voluptas,
									ipsam numquam voluptatibus a, odit praesentium magnam tempora deleniti iusto aliquam 
									molestias et exercitationem inventore? Ut delectus deserunt unde accusantium laboriosam,
									veniam, hic atque.
								</div>
							</div>
							<div className="affinity">
								<p className="heading">Affinity Group</p>
								<div className="affinity-desc">
									<div className="wie">
										<div className="wie-heading">Women In Engineering</div>
										<div className="wie-desc">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci 
											at illum eveniet ducimus earum ratione voluptatem laboriosam nihil
											 reiciendis nostrum, asperiores alias rerum unde autem neque eos veniam 
											 voluptatibus exercitationem fuga sapiente tenetur mollitia quam?
										</div>
									</div>
									<div className="wie-img">
										<img src={require('./wie.png')} alt=""/>
									</div>
									<div className="know-more">Know more at:  wie.ieee.org</div>
								</div>
							</div>
						</div>
						<div className="members">
							<p className="heading">
								Members
							</p>
							<div className="wie">
								<div className="number">60</div>
								<img src={require('./wie.png')} alt=""/>
								<div className="head">WIE</div>
							</div>
							<div className="total">
								<div className="number">80</div>
								<img src={require('./total.png')} alt=""/>
								<div className="head">Total</div>
							</div>
							<div className="pes">
								<div className="number">15</div>
								<img src={require('./pes.png')} alt=""/>
								<div className="head">PES</div>
							</div>
							<div className="coordinator">
								<div className="number">12</div>
								<img src={require('./coordinator.png')} alt=""/>
								<div className="head">Coordinators</div>
							</div>
							<div className="executives">
								<div className="number">9</div>
								<img src={require('./executives.png')} alt=""/>
								<div className="head">Executives</div>
							</div>
							<div className="volunteers">
								<div className="number">13</div>
								<img src={require('./volunteer.png')} alt=""/>
								<div className="head">Volunteers</div>
							</div>
						</div>
						<div className="footer">
							<img src={require('./footer.png')} alt=""/>
						</div>
					</div>
				</div>
			)
	}
}

export default KnowMAIT;