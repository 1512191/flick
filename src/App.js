import React, { Component } from 'react';
import Header from './Component/Header';
import Panel from './Component/Panel';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterURL from './RouterURL/RouterURL';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  getMenu(name) {
    this.setState({
      name: name
    })

  }
  render() {

    return (
      <Router>
        <div >
          <Header />
          <Panel menu={this.state.name} />
          <RouterURL menu={(name) => this.getMenu(name)} />
        </div>
      </Router>
    );
  }
}
export default App;
