import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from 'simple-react-button';
import 'simple-react-button/styles.scss';

import './index.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { status: '' };
    }

    onClick(arg) {
        this.setState({ status: arg });
    }

    onLongClick() {
        return new Promise(resolve => {
            this.setState({ status: 'doing something...' });
            setTimeout(() => {
                this.setState({ status: 'done!' });
                resolve();
            }, 3 * 1000);
        });
    }

    render() {
        const arg = 'clicked';

        return (
            <div className="app">
                <h1>Button Component</h1>
                <p>Status: <span>{this.state.status}</span></p>
                <div className="app-buttons">
                    <Button value='Click Me!' clickHandler={this.onClick.bind(this, arg)} />
                    <Button
                        type='reset'
                        value='Reset'
                        clickHandler={this.onClick.bind(this, '')}
                    />
                </div>
                <div className="app-buttons">
                    <Button
                        value='Long Action'
                        className='your-additional-class'
                        clickHandler={::this.onLongClick}
                    />
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
