import React from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './components/SeasonDisplay';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    console.log('My component was rendered to the screen (mounted)');
    this.getLocation();
  }

  componentDidUpdate() {
    console.log('My component rerendered(updated)');
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      },
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
