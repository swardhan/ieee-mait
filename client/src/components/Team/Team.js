import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component{
	render(){
		return(
				<div>
					Team Page
				</div>
			)
	}
}

export default connect(null, null)(Team);