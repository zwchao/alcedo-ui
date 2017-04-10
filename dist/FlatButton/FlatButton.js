'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseButton = require('../_BaseButton');

var _BaseButton2 = _interopRequireDefault(_BaseButton);

require('./FlatButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlatButton = function (_Component) {
    (0, _inherits3.default)(FlatButton, _Component);

    function FlatButton(props) {
        (0, _classCallCheck3.default)(this, FlatButton);
        return (0, _possibleConstructorReturn3.default)(this, (FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call(this, props));
    }

    (0, _createClass3.default)(FlatButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                onTouchTap = _props.onTouchTap;


            return _react2.default.createElement(
                _BaseButton2.default,
                (0, _extends3.default)({}, this.props, {
                    className: 'flat-button ' + className,
                    onTouchTap: onTouchTap }),
                children
            );
        }
    }]);
    return FlatButton;
}(_react.Component);

exports.default = FlatButton;
;

FlatButton.propTypes = {

    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    buttonStyle: _react.PropTypes.string,
    isRounded: _react.PropTypes.bool,
    isCircular: _react.PropTypes.bool,

    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    type: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    isLoading: _react.PropTypes.bool,
    disableTouchRipple: _react.PropTypes.bool,

    iconCls: _react.PropTypes.string,
    iconPosition: _react.PropTypes.string,

    onTouchTap: _react.PropTypes.func

};

FlatButton.defaultProps = {

    className: '',
    style: null,
    buttonStyle: '',
    isRounded: false,
    isCircular: false,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    iconCls: '',
    iconPosition: 'left'

};