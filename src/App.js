import { Component } from 'react';
import './App.css';
import PersonList from './components/PersonList';

class App extends Component {
  state = {
    people: []
  };
  
  render() {
    return (
      <div className="App">
        <PersonList people={this.state.people}/>
      </div>
    );
  }
}

export default App;
