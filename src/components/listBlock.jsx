import React, { Component } from 'react';

class ListBlock extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<table cellPadding="0" cellSpacing="0" border="0" key={ this.props.testKey }>
				<tbody>
					<tr>
						<td width="128px"><img src={this.props.dataResults.picture.large} /></td>
						<td>
							{ this.props.dataResults.name.title } { this.props.dataResults.name.first } { this.props.dataResults.name.last }<br />
							{ this.props.dataResults.gender }<br />
							Contact: { this.props.dataResults.cell }<br />
							Nationality: { this.props.dataResults.nat }<br />
							Email: { this.props.dataResults.email }
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default ListBlock;