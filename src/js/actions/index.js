import * as types from '../constants/ActionTypes';
import path from 'path';
import fs from 'fs-extra';
import {remote, ipcRenderer} from 'electron';

export function beginLoading() {
	return {
		type: types.BEGIN_LOADING
	};
}

export function endLoading() {
	return {
		type: types.END_LOADING
	};
}

export function setAlertText(text) {
	return {
		type: types.SET_ALERT_TEXT,
		text
	};
}

export function selectImage() {
	return dispatch => {
		remote.dialog.showOpenDialog({
			title: 'Open Image',
			filters: [
				{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }
			]
		}, function(files){
			if(!files || files.length === 0) {
				return;
			}
			let rand = "" + (Math.floor(Math.random() * (99999999 - 10 + 1)) + 10);
			let pad = "00000000";
			let filenameRand = (pad.substring(0, pad.length - rand.length) + rand) + path.extname(files[0]);
			let tmpFile = path.join(remote.app.getPath('temp'), filenameRand);
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

export function saveImage(previewFile, sourceFile) {
	return dispatch => {
		let ext = path.extname(previewFile);
		ext = ext.substring(1);
		remote.dialog.showSaveDialog({
			title: 'Save Image',
			defaultPath: path.dirname(sourceFile),
			filters: [
				{ name: 'Images', extensions: [ext] }
			]
		}, function(filename){
			try {
				fs.copySync(previewFile, filename);
				dispatch(setAlertText(`File saved as: ${filename}`));
			} catch(e) {
				dispatch(setAlertText(`Unable to save file.  Recieved the following error: ${e}`));
			}
		});
	};
}

export function updateText1(text) {
	return {
		type: types.UPDATE_LINE1_TEXT,
		text
	};
}

export function updateText2(text) {
	return {
		type: types.UPDATE_LINE2_TEXT,
		text
	};
}

export function updateText3(text) {
	return {
		type: types.UPDATE_LINE3_TEXT,
		text
	};
}


export function updateAlignment1(alignment) {
	return {
		type: types.UPDATE_LINE1_ALIGNMENT,
		alignment
	};
}

export function updateAlignment2(alignment) {
	return {
		type: types.UPDATE_LINE2_ALIGNMENT,
		alignment
	};
}

export function updateAlignment3(alignment) {
	return {
		type: types.UPDATE_LINE3_ALIGNMENT,
		alignment
	};
}

let updateText1Timeout = null;
export function updateText1Async(text) {
	return (dispatch) => {
		clearTimeout(updateText1Timeout);
		updateText1Timeout = setTimeout(() => {
				dispatch(updateText1(text));
			}, 300);
	};
}

let updateText2Timeout = null;
export function updateText2Async(text) {
	return (dispatch) => {
		clearTimeout(updateText2Timeout);
		updateText2Timeout = setTimeout(() => {
				dispatch(updateText2(text));
			}, 300);
	};
}


let updateText3Timeout = null;
export function updateText3Async(text) {
	return (dispatch) => {
		clearTimeout(updateText3Timeout);
		updateText3Timeout = setTimeout(() => {
				dispatch(updateText3(text));
			}, 300);
	};
}
