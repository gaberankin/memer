'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.beginLoading = beginLoading;
exports.endLoading = endLoading;
exports.setAlertText = setAlertText;
exports.selectImage = selectImage;
exports.saveImage = saveImage;
exports.updateText1 = updateText1;
exports.updateText2 = updateText2;
exports.updateText3 = updateText3;
exports.updateAlignment1 = updateAlignment1;
exports.updateAlignment2 = updateAlignment2;
exports.updateAlignment3 = updateAlignment3;
exports.updateText1Async = updateText1Async;
exports.updateText2Async = updateText2Async;
exports.updateText3Async = updateText3Async;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function beginLoading() {
	return {
		type: types.BEGIN_LOADING
	};
}

function endLoading() {
	return {
		type: types.END_LOADING
	};
}

function setAlertText(text) {
	return {
		type: types.SET_ALERT_TEXT,
		text: text
	};
}

function selectImage() {
	return function (dispatch) {
		_electron.remote.dialog.showOpenDialog({
			title: 'Open Image',
			filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
		}, function (files) {
			if (!files || files.length === 0) {
				return;
			}
			var rand = "" + (Math.floor(Math.random() * (99999999 - 10 + 1)) + 10);
			var pad = "00000000";
			var filenameRand = pad.substring(0, pad.length - rand.length) + rand + _path2.default.extname(files[0]);
			var tmpFile = _path2.default.join(_electron.remote.app.getPath('temp'), filenameRand);
			try {
				dispatch({
					type: types.LOAD_IMAGE,
					imageFilePath: files[0],
					previewFilePath: tmpFile
				});
			} catch (e) {
				dispatch(setAlertText('Unable to create preview file: ' + e));
			}
		});
	};
}

function saveImage(previewFile, sourceFile) {
	return function (dispatch) {
		var ext = _path2.default.extname(previewFile);
		ext = ext.substring(1);
		_electron.remote.dialog.showSaveDialog({
			title: 'Save Image',
			defaultPath: _path2.default.dirname(sourceFile),
			filters: [{ name: 'Images', extensions: [ext] }]
		}, function (filename) {
			try {
				_fsExtra2.default.copySync(previewFile, filename);
				dispatch(setAlertText('File saved as: ' + filename));
			} catch (e) {
				dispatch(setAlertText('Unable to save file.  Recieved the following error: ' + e));
			}
		});
	};
}

function updateText1(text) {
	return {
		type: types.UPDATE_LINE1_TEXT,
		text: text
	};
}

function updateText2(text) {
	return {
		type: types.UPDATE_LINE2_TEXT,
		text: text
	};
}

function updateText3(text) {
	return {
		type: types.UPDATE_LINE3_TEXT,
		text: text
	};
}

function updateAlignment1(alignment) {
	return {
		type: types.UPDATE_LINE1_ALIGNMENT,
		alignment: alignment
	};
}

function updateAlignment2(alignment) {
	return {
		type: types.UPDATE_LINE2_ALIGNMENT,
		alignment: alignment
	};
}

function updateAlignment3(alignment) {
	return {
		type: types.UPDATE_LINE3_ALIGNMENT,
		alignment: alignment
	};
}

var updateText1Timeout = null;
function updateText1Async(text) {
	return function (dispatch) {
		clearTimeout(updateText1Timeout);
		updateText1Timeout = setTimeout(function () {
			dispatch(updateText1(text));
		}, 300);
	};
}

var updateText2Timeout = null;
function updateText2Async(text) {
	return function (dispatch) {
		clearTimeout(updateText2Timeout);
		updateText2Timeout = setTimeout(function () {
			dispatch(updateText2(text));
		}, 300);
	};
}

var updateText3Timeout = null;
function updateText3Async(text) {
	return function (dispatch) {
		clearTimeout(updateText3Timeout);
		updateText3Timeout = setTimeout(function () {
			dispatch(updateText3(text));
		}, 300);
	};
}