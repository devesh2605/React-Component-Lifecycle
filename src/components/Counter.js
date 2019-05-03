import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        console.log('Child - Constructor');
        super(props);
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    componentDidMount() {
        console.log('Child - Component did mount');
        console.log('-----------');
    }

    render() {
        console.log('Child - Render');
        return (
            <div className="container" style={{ backgroundColor: 'grey', marginTop: '20px', height: '150px' }}>
                <div style={{ paddingTop: '16px' }}>
                    <h5>Child</h5>
                    <button type="button" className="btn btn-success" onClick={this.increment}>Increment</button>
                    <button type="button" className="btn btn-danger" onClick={this.decrement} style={{ marginLeft: '8px' }}>Decrement</button>
                    <h2 style={{ marginTop: '16px' }}>Counter: {this.state.counter}</h2>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log('Child - Component did update');
        console.log('-----------');
    }

    componentWillUnmount() {
        console.log('Child - Component will unmount');
        console.log('-----------');
    }
}