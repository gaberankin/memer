import React from 'react';
import MemeImage from './MemeImage';
import ImageFormInputLine from './ImageFormInputLine';
import { Grid, Col, Row, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class ImageForm extends React.Component {
	render () {
		return (
			<Grid>
				<Row>
					<Col xs={4}>
						<a href="#" onClick={ this.props.onClickImageSelection }>{((p) => {
							if(p.path) {
								return <MemeImage path={p.path} />;
							} else {
								return <span>Select Image</span>;
							}
						})(this.props)}</a>
						{((p) => {
							if(p.path) {
								return <Button onClick={ p.onClickSaveImage }>Save Image</Button>;
							}
						})(this.props)}
					</Col>
					<Col xs={8}>
						<ImageFormInputLine
							line={1}
							onTextChange={this.props.onChangeTextLine1}
							onAlignmentChange={this.props.onChangeAlignmentLine1} />
						<ImageFormInputLine
							line={2}
							onTextChange={this.props.onChangeTextLine2}
							onAlignmentChange={this.props.onChangeAlignmentLine2} />
						<ImageFormInputLine
							line={3}
							onTextChange={this.props.onChangeTextLine3}
							onAlignmentChange={this.props.onChangeAlignmentLine3} />
					</Col>
				</Row>
			</Grid>
		);
	}
}

ImageForm.propTypes = {
	path: React.PropTypes.string,
	onClickImageSelection: React.PropTypes.func.isRequired,
	onClickSaveImage: React.PropTypes.func.isRequired,
	onChangeTextLine1: React.PropTypes.func.isRequired,
	onChangeAlignmentLine1: React.PropTypes.func.isRequired,
	onChangeTextLine2: React.PropTypes.func.isRequired,
	onChangeAlignmentLine2: React.PropTypes.func.isRequired,
	onChangeTextLine3: React.PropTypes.func.isRequired,
	onChangeAlignmentLine3: React.PropTypes.func.isRequired,
};

export default ImageForm;
