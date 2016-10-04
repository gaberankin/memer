import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { LoadingDialog, AlertDialog, ImageForm } from '../components';

class MemerApp extends React.Component {
	render () {
		const {
			memer: {
				/*
					list props you want here!
					(see reducers/memer.js for app initialState variable)
				*/
				isLoading,
				alertText,
				previewFilePath,
				imageFilePath
			},
			dispatch
		} = this.props;
		const actions = bindActionCreators(Actions, dispatch);

		return (
			<div className="memer-app">
				<div className="memer-body">
					<ImageForm
						onClickImageSelection={actions.selectImage}
						onClickSaveImage={ e => actions.saveImage(previewFilePath, imageFilePath) }
						onChangeTextLine1={e => actions.updateText1Async(e.target.value) }
						onChangeAlignmentLine1={ e => actions.updateAlignment1(e.target.value)}
						onChangeTextLine2={e => actions.updateText2Async(e.target.value)}
						onChangeAlignmentLine2={ e => actions.updateAlignment2(e.target.value) }
						onChangeTextLine3={ e => actions.updateText3Async(e.target.value) }
						onChangeAlignmentLine3={ e => actions.updateAlignment3(e.target.value) }
						path={previewFilePath}/>
				</div>
				<LoadingDialog isLoading={isLoading} />
				<AlertDialog text={alertText} actions={actions} />
			</div>
		);
	}
}
MemerApp.propTypes = {
	memer: React.PropTypes.object.isRequired
};

const select = function(state) {
	return { memer: state.memer };
};

export default connect(select)(MemerApp);
