import React from 'react';
import Counter from './components/Counter';

export default class App extends React.Component {

  constructor(props){
    console.log('Parent: Contructor');
    super(props);
    this.state={
      mount: true
    }

    this.mountComponent = this.mountComponent.bind(this);
    this.unMountComponent = this.unMountComponent.bind(this);
  }

  mountComponent = () => {
    this.setState({
      mount: true
    });
  }

  unMountComponent = () => {
    this.setState({
      mount: false
    });
  }

  render() {
    console.log('Parent: Render');
    return (
      <div className="container" style={{ backgroundColor: 'yellow', marginTop: '30px', height: '300px' }}>
        <div style={{ paddingTop: '16px' }}>
          <h5>Parent</h5>
          <button type="button" className="btn btn-success" onClick={this.mountComponent} disabled={this.state.mount}>Mount</button>
          <button type="button" className="btn btn-danger" onClick={this.unMountComponent} style={{ marginLeft: '8px' }} disabled={!this.state.mount}>UnMount</button>
        </div>
        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}
