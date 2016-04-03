'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DELAY = 300;
var LOADER_DELAY = 900;
var CLASS_NAME = 'button';

for (var Component____Key in _react.Component) {
    if (_react.Component.hasOwnProperty(Component____Key)) {
        Button[Component____Key] = _react.Component[Component____Key];
    }
}var ____SuperProtoOfComponent = _react.Component === null ? null : _react.Component.prototype;Button.prototype = Object.create(____SuperProtoOfComponent);Button.prototype.constructor = Button;Button.__superConstructor__ = _react.Component;

function Button(props) {
    _react.Component.call(this, props);
    this.state = {
        disabled: false,
        showLoading: false
    };
}

Object.defineProperty(Button.prototype, "onClick", { writable: true, configurable: true, value: function value(event) {
        var _this = this;

        var $__0 = this.props,
            clickHandler = $__0.clickHandler;

        event.preventDefault();
        event.stopPropagation();

        this.setState({ disabled: true });

        var handler = clickHandler();

        if (handler && handler instanceof Promise) {
            (function () {
                var loader = setTimeout(function () {
                    return this.setState({ showLoading: true });
                }.bind(_this), LOADER_DELAY);

                handler.then(function () {
                    clearTimeout(loader);

                    setTimeout(function () {
                        return this.setState({
                            disabled: false,
                            showLoading: false
                        });
                    }.bind(this), DELAY);
                }.bind(_this));
            })();
        } else {
            this.setState({ disabled: false });
        }
    } });

Object.defineProperty(Button.prototype, "render", { writable: true, configurable: true, value: function value() {
        var $__0 = this.props,
            type = $__0.type,
            className = $__0.className,
            value = $__0.value;
        var classNames = !className ? CLASS_NAME : CLASS_NAME + " " + className;

        return _react2.default.createElement("input", {
            type: type,
            className: classNames,
            value: this.state.showLoading === true ? 'Processing...' : value,
            disabled: this.state.disabled,
            onClick: function (event) {
                return this.onClick(event);
            }.bind(this) });
    } });

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    type: _react.PropTypes.oneOf(['button', 'submit', 'reset']),
    className: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.string.isRequired,
    clickHandler: _react2.default.PropTypes.func.isRequired
};

module.exports = Button;