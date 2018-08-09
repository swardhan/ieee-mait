const initialState = {
	page: 'welcome'
}

const landingReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'LANDING_FILTER':
			return {
				page: action.data
			}
		default:
			return state;
	}
}

export default landingReducer;