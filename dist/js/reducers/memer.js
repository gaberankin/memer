'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = memer;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	/*
 	Add your app props here (see containers/MemerApp.jsx)
 */
	isLoading: false,
	alertText: '',
	imageFilePath: null,
	previewFilePath: null,
	line1Text: '',
	line1Alignment: 'northwest',
	line2Text: '',
	line2Alignment: 'west',
	line3Text: '',
	line3Alignment: 'southwest'

};

function memer(state, action) {
	if (!state) {
		state = _extends({}, initialState);
	}
	var fireApplyText = false;
	//non-selection actions
	switch (action.type) {
		/**
   * begin non-file modifying items.
   **/
		case types.BEGIN_LOADING:
			state.isLoading = true;
			break;
		case types.END_LOADING:
			state.isLoading = false;
			break;
		case types.SET_ALERT_TEXT:
			state.alertText = action.text;
			break;
		case types.LOAD_IMAGE:
			state.imageFilePath = action.imageFilePath;
			state.previewFilePath = action.previewFilePath;
			fireApplyText = true;
			break;
		case types.UPDATE_LINE1_TEXT:
			state.line1Text = action.text;
			fireApplyText = true;
			break;
		case types.UPDATE_LINE1_ALIGNMENT:
			state.line1Alignment = action.alignment;
			fireApplyText = true;
			break;
		case types.UPDATE_LINE2_TEXT:
			state.line2Text = action.text;
			fireApplyText = true;
			break;
		case types.UPDATE_LINE2_ALIGNMENT:
			state.line2Alignment = action.alignment;
			fireApplyText = true;
			break;
		case types.UPDATE_LINE3_TEXT:
			state.line3Text = action.text;
			fireApplyText = true;
			break;
		case types.UPDATE_LINE3_ALIGNMENT:
			state.line3Alignment = action.alignment;
			fireApplyText = true;
			break;

		/**
   * end non-file modifying items.
   **/
	}

	if (fireApplyText) {
		applyText(state);
	}

	return _extends({}, state);
}

function applyText(state) {
	//convert <source-image> -gravity <line1Alignment> -font Impact -pointsize 72 -fill white -stroke black -strokewidth 3 -annotate 0 'I guess...' -gravity south -annotate 0 'Maybe?' font-stroke.png
	var args = [state.imageFilePath];
	for (var i = 1; i <= 3; i++) {
		if (state['line' + i + 'Text'] != '') {
			args.push('-gravity');
			args.push(state['line' + i + 'Alignment']);
			args.push('-font');
			args.push('Impact');
			args.push('-pointsize');
			args.push('72');
			args.push('-fill');
			args.push('white');
			args.push('-stroke');
			args.push('black');
			args.push('-strokewidth');
			args.push('3');
			args.push('-annotate');
			args.push('0');
			args.push(state['line' + i + 'Text']);
		}
	}
	args.push(state.previewFilePath);
	_child_process2.default.execFileSync('convert', args);
}