import './App.scss';
import React, { Component } from 'react';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShown: false
        };
    }
    toggleIsShown = () => {
        this.setState({isShown: !this.state.isShown});
    };
    render () {
        return (
            <div className='app' onClick={this.toggleIsShown}>
                {this.state.isShown
                    ? <div>Toggle me 1</div>
                    : <div>Toggle me 0</div>}
            </div>
        );
    }
}

export default App;
