import axios from 'axios';

function serviceCall(url) {
	return axios.get(url)
		.then(function(response) {
			return response
		});
}

export default serviceCall;