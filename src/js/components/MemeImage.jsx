import React from 'react';
import { Image } from 'react-bootstrap';

class MemeImage extends React.Component {
	render () {
		return (
			<Image src={`${this.props.path}?${(new Date()).getTime()}`} thumbnail />
		);
	}
	shouldComponentUpdate (nextProps, nextState) {
		return true;
	}
}

MemeImage.propTypes = {
	path: React.PropTypes.string.isRequired
};

export default MemeImage;
