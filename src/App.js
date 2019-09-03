import React, { Component } from 'react';
import './App.css';
// components
import SeasonDisplay from './components/SeasonDisplay'

class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  }

  render() {

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err })
    )

    return (
      <div className="mt-20">
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

export default App;