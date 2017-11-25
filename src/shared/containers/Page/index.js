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
export default class Page extends Component {
	static propTypes = {
		handleGetData: PropTypes.func.isRequired,
		content: PropTypes.shape({
			data: PropTypes.string,
		}),
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
			<div className={styles.page}>
				<div onClick={this.handleClick('page content')}>I am page, click me</div>
				{content.data}
			</div>
		);
	}
}
