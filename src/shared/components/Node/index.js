import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { handleGetData } from 'ducks/content';

export default class Node extends Component {
    static propTypes = {
        content: PropTypes.shape({
		type: PropTypes.string,
		name: PropTypes.string,
		childrens: PropTypes.array
    })
	}
	handleClick = data => () => {
		this.props.handleGetData(data);
	}
	render() {
		const styles = require('./styles.scss');
		const {
			type,
			name,
			childrens
		} = this.props;
		console.log(this.props)
		const childrensList = childrens !== undefined ? childrens.map( (item) => <Node handleGetData={this.props.handleGetData} key={item.name} type={item.type}  name={item.name} childrens={item.childrens} />) : null;
		return (
			<li onClick={this.handleClick('file')} className={[styles.node, styles[type]].join(' ')} >
				<span>{name}</span>
				<ul>{childrensList}</ul>
			</li>
		);
	}
}