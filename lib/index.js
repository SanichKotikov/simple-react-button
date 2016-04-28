'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DELAY = 300;
var LOADER_DELAY = 900;
var CLASS_NAME = 'button';

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

        _this.state = {
            disabled: false,
            showLoading: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'onClick',
        value: function onClick(event) {
            var _this2 = this;

            var clickHandler = this.props.clickHandler;


            event.preventDefault();
            event.stopPropagation();

            this.setState({ disabled: true });

            var handler = clickHandler();

            if (handler && handler instanceof Promise) {
                (function () {
                    var loader = setTimeout(function () {
                        return _this2.setState({ showLoading: true });
                    }, LOADER_DELAY);

                    handler.then(function () {
                        clearTimeout(loader);

                        setTimeout(function () {
                            return _this2.setState({
                                disabled: false,
                                showLoading: false
                            });
                        }, DELAY);
                    });
                })();
            } else {
                this.setState({ disabled: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props;
            var type = _props.type;
            var className = _props.className;
            var disabled = _props.disabled;
            var value = _props.value;

            var classNames = !className ? CLASS_NAME : CLASS_NAME + ' ' + className;

            return _react2.default.createElement('input', {
                type: type,
                className: classNames,
                value: this.state.showLoading === true ? 'Processing...' : value,
                disabled: disabled === true ? disabled : this.state.disabled,
                onClick: function onClick(event) {
                    return _this3.onClick(event);
                }
            });
        }
    }]);

    return Button;
}(_react.Component);

Button.defaultProps = {
    type: 'button'
};
Button.propTypes = {
    type: _react.PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    value: _react.PropTypes.string.isRequired,
    clickHandler: _react.PropTypes.func.isRequired
};


module.exports = Button;
