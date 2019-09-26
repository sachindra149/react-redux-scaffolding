import React, { Component } from 'react';
import serviceCall from '../services/service.jsx';

import ListBlock from './listBlock.jsx';
import { resolve, reject } from 'q';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dataResults: ''
		}
	}

	componentDidMount() {
		serviceCall('https://randomuser.me/api/?results=50')
			.then((res) => {
				resolve(
					this.setState({
						dataResults: res.data.results
					})
				)
				reject((err) => console.log("err: ", err))
			});
	}
	
	render() {
		// cl
		return (
			<React.Fragment>
				<h1 className="fullWidth">React Redux Testing App</h1>
				<h3 className="fullWidth">This is a basic scaffolding for app using React And Redux</h3>
				<div className="fullWidth">
					{
						this.state.dataResults && this.state.dataResults.length > 0 ? (
							this.state.dataResults.map((item, index) =>
								<ListBlock dataResults={item} testKey={index} />
							)
						) : (<div className="loading"><div className="lds-dual-ring"></div></div>)
					}
				</div>
			</React.Fragment>
		)
	}
}

export default App;