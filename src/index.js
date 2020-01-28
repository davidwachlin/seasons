import React from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './components/SeasonDisplay';
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: '',
  };

  componentDidMount() {
    this.getLocation();
  }

  componentDidUpdate() {
    console.log('My component rerendered(updated)');
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
