import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Node from 'components/Node';
import { handleGetData } from 'ducks/content';
@connect(
	state => ({ content: state.content }),
	{ handleGetData },
)
export default class App extends Component {
	static propTypes = {
		handleGetData: PropTypes.func.isRequired,
		content: PropTypes.shape({
			data: PropTypes.string,
			tree : PropTypes.object
		}),
	}

	handleClick = data => () => {
		this.props.handleGetData(data);
	}
	render() {
		const styles = require('./styles.scss');
		const {
			content,
			handleGetData
		} = this.props;

		return (
			<div className={styles.app}>
				<div className={styles.container}>
					<div>I am app</div>
					<ul>
						<Node handleGetData={handleGetData} type={content.tree.type}  name={content.tree.name} childrens={content.tree.childrens} />
					</ul>
					{this.props.children}
				</div>
			</div>
		);
	}
}
