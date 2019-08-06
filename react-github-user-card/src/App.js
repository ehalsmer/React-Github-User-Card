import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: {},
      followers: []
    }
  }

  componentDidMount(){

  }

  render(){

    return (
      <div className="App">
        <h1>User Card</h1>
        <h2>Follower Cards</h2>
      </div>
    );
  }
}

export default App;
