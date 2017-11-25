import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
	handleGetData,
} from 'ducks/content';

@connect(
	state => ({ content: state.content }),
	{ handleGetData },
)
export default class App extends Component {
	static propTypes = {
		handleGetData: PropTypes.func.isRequired,
		content: PropTypes.shape({
			data: PropTypes.string,
		}),
		children: PropTypes.node.isRequired,
	}

	handleClick = data => () => {
		this.props.handleGetData(data);
	}

	render() {
		const styles = require('./styles.scss');
		const {
			content,
		} = this.props;

		return (
			<div className={styles.app}>
				<div className={styles.container}>
					<div onClick={this.handleClick('test content')}>I am app, click me</div>
					{content.data}
					{this.props.children}
				</div>
			</div>
		);
	}
}
