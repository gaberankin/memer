'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageFormInputLine = function (_React$Component) {
	_inherits(ImageFormInputLine, _React$Component);

	function ImageFormInputLine() {
		_classCallCheck(this, ImageFormInputLine);

		return _possibleConstructorReturn(this, (ImageFormInputLine.__proto__ || Object.getPrototypeOf(ImageFormInputLine)).apply(this, arguments));
	}

	_createClass(ImageFormInputLine, [{
		key: 'render',
		value: function render() {
			var options = null;
			switch (this.props.line) {
				case 1:
					options = [_react2.default.createElement(
						'option',
						{ key: 'left', value: 'northwest' },
						'Left'
					), _react2.default.createElement(
						'option',
						{ key: 'center', value: 'north' },
						'Center'
					), _react2.default.createElement(
						'option',
						{ key: 'right', value: 'northeast' },
						'Right'
					)];
					break;
				case 3:
					options = [_react2.default.createElement(
						'option',
						{ key: 'left', value: 'southwest' },
						'Left'
					), _react2.default.createElement(
						'option',
						{ key: 'center', value: 'south' },
						'Center'
					), _react2.default.createElement(
						'option',
						{ key: 'right', value: 'southeast' },
						'Right'
					)];
					break;
				default:
					//case 2
					options = [_react2.default.createElement(
						'option',
						{ key: 'left', value: 'west' },
						'Left'
					), _react2.default.createElement(
						'option',
						{ key: 'center', value: 'center' },
						'Center'
					), _react2.default.createElement(
						'option',
						{ key: 'right', value: 'east' },
						'Right'
					)];
					break;
			}
			return _react2.default.createElement(
				_reactBootstrap.FormGroup,
				null,
				_react2.default.createElement(
					_reactBootstrap.Row,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 7 },
						_react2.default.createElement(
							_reactBootstrap.ControlLabel,
							null,
							'Line ',
							this.props.line,
							' Text'
						),
						_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Line ' + this.props.line, onChange: this.props.onTextChange })
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 5 },
						_react2.default.createElement(
							_reactBootstrap.ControlLabel,
							null,
							'Alignment'
						),
						_react2.default.createElement(
							_reactBootstrap.FormControl,
							{ placeholder: 'alignment', onChange: this.props.onAlignmentChange, componentClass: 'select' },
							options
						)
					)
				)
			);
		}
	}]);

	return ImageFormInputLine;
}(_react2.default.Component);

ImageFormInputLine.propTypes = {
	line: _react2.default.PropTypes.number,
	onAlignmentChange: _react2.default.PropTypes.func,
	onTextChange: _react2.default.PropTypes.func
};
ImageFormInputLine.default = {
	onAlignmentChange: function onAlignmentChange(e) {},
	onTextChange: function onTextChange(e) {}
};

exports.default = ImageFormInputLine;