import React from 'react';
import { Grid, Col, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class ImageFormInputLine extends React.Component {
	render () {
		var options = null;
		switch(this.props.line) {
			case 1:
				options = [
					<option key="left" value="northwest">Left</option>,
					<option key="center" value="north">Center</option>,
					<option key="right" value="northeast">Right</option>
				];
			break;
			case 3:
				options = [
					<option key="left" value="southwest">Left</option>,
					<option key="center" value="south">Center</option>,
					<option key="right" value="southeast">Right</option>
				];
			break;
			default:	//case 2
				options = [
					<option key="left" value="west">Left</option>,
					<option key="center" value="center">Center</option>,
					<option key="right" value="east">Right</option>
				];
			break;
		}
		return (
			<FormGroup>
				<Row>
					<Col xs={7}>
						<ControlLabel>Line {this.props.line} Text</ControlLabel>
						<FormControl type="text" placeholder={`Line ${this.props.line}`} onChange={this.props.onTextChange} />
					</Col>
					<Col xs={5}>
						<ControlLabel>Alignment</ControlLabel>
						<FormControl placeholder="alignment" onChange={this.props.onAlignmentChange} componentClass="select">
							{options}
						</FormControl>
					</Col>
				</Row>
			</FormGroup>
		);
	}
}

ImageFormInputLine.propTypes = {
	line: React.PropTypes.number,
	onAlignmentChange: React.PropTypes.func,
	onTextChange: React.PropTypes.func
};
ImageFormInputLine.default = {
	onAlignmentChange: function(e){},
	onTextChange: function(e){}
};

export default ImageFormInputLine;
