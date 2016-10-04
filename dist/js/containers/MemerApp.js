'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var Actions = _interopRequireWildcard(_actions);

var _components = require('../components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemerApp = function (_React$Component) {
	_inherits(MemerApp, _React$Component);

	function MemerApp() {
		_classCallCheck(this, MemerApp);

		return _possibleConstructorReturn(this, (MemerApp.__proto__ || Object.getPrototypeOf(MemerApp)).apply(this, arguments));
	}

	_createClass(MemerApp, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var _props$memer = _props.memer;
			var isLoading = _props$memer.isLoading;
			var alertText = _props$memer.alertText;
			var previewFilePath = _props$memer.previewFilePath;
			var imageFilePath = _props$memer.imageFilePath;
			var dispatch = _props.dispatch;

			var actions = (0, _redux.bindActionCreators)(Actions, dispatch);

			return _react2.default.createElement(
				'div',
				{ className: 'memer-app' },
				_react2.default.createElement(
					'div',
					{ className: 'memer-body' },
					_react2.default.createElement(_components.ImageForm, {
						onClickImageSelection: actions.selectImage,
						onClickSaveImage: function onClickSaveImage(e) {
							return actions.saveImage(previewFilePath, imageFilePath);
						},
						onChangeTextLine1: function onChangeTextLine1(e) {
							return actions.updateText1Async(e.target.value);
						},
						onChangeAlignmentLine1: function onChangeAlignmentLine1(e) {
							return actions.updateAlignment1(e.target.value);
						},
						onChangeTextLine2: function onChangeTextLine2(e) {
							return actions.updateText2Async(e.target.value);
						},
						onChangeAlignmentLine2: function onChangeAlignmentLine2(e) {
							return actions.updateAlignment2(e.target.value);
						},
						onChangeTextLine3: function onChangeTextLine3(e) {
							return actions.updateText3Async(e.target.value);
						},
						onChangeAlignmentLine3: function onChangeAlignmentLine3(e) {
							return actions.updateAlignment3(e.target.value);
						},
						path: previewFilePath })
				),
				_react2.default.createElement(_components.LoadingDialog, { isLoading: isLoading }),
				_react2.default.createElement(_components.AlertDialog, { text: alertText, actions: actions })
			);
		}
	}]);

	return MemerApp;
}(_react2.default.Component);

MemerApp.propTypes = {
	memer: _react2.default.PropTypes.object.isRequired
};

var select = function select(state) {
	return { memer: state.memer };
};

exports.default = (0, _reactRedux.connect)(select)(MemerApp);