import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Node extends Component {
	static propTypes = {
		handleGetData: PropTypes.func.isRequired,
		type: PropTypes.string,
		name: PropTypes.string,
		childrens: PropTypes.arrayOf(PropTypes.object),
	}
	handleClick = data => (e) => {
		e.stopPropagation();
		this.props.handleGetData(data);
	}
	render() {
		const styles = require('./styles.scss');
		const {
			type,
			name,
			childrens,
		} = this.props;
		const childrensList = childrens !== undefined ? childrens.map(item =>
			(
				<Node
					handleGetData={this.props.handleGetData}
					key={item.name}
					type={item.type}
					name={item.name}
					childrens={item.childrens}
				/>
			))
			: null;
		return (
			<li className={[styles.node, styles[type]].join(' ')} >
				<span>{name}</span>
				<button onClick={this.handleClick(name)}>+</button>
				<ul>{childrensList}</ul>
			</li>
		);
	}
}
