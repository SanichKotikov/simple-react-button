'use strict';

import React, { Component, PropTypes } from 'react';
import '../styles.scss';

const DELAY = 300;
const LOADER_DELAY = 900;
const CLASS_NAME = 'button';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            showLoading: false,
        };
    }

    onClick(event) {
        const { clickHandler } = this.props;
        this.setState({ disabled: true });

        const handler = clickHandler();

        if (handler && handler instanceof Promise) {
            const loader = setTimeout(() => this.setState({ showLoading: true }), LOADER_DELAY);

            handler.then(() => {
                clearTimeout(loader);

                setTimeout(() => this.setState({
                    disabled: false,
                    showLoading: false,
                }), DELAY);
            });
        } else {
            this.setState({ disabled: false });
        }
    }

    render() {
        const { type, className, value } = this.props;
        const classNames = !className ? CLASS_NAME : `${CLASS_NAME} ${className}`;

        return (
            <input
                type={type}
                className={classNames}
                value={this.state.showLoading === true ? 'Processing...' : value}
                disabled={this.state.disabled}
                onClick={event => this.onClick(event)}
            />
        );
    }
}

Button.defaultProps = {
    type: 'button',
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    clickHandler: React.PropTypes.func.isRequired,
};

module.exports = Button;
