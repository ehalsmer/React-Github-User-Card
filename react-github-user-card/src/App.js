import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: 'ehalsmer',
      userData: {},
      followersUrl: '',
      followersArray: []
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then((response)=>{
      console.log('axios response', response.data)
      this.setState({
        userData: response.data,
        followersUrl: response.data.followers_url
      })
    })
  }

  render(){
    console.log('state in render', this.state)
    return (
      <div className="App">
        {/* // Render userCard component, passing userData object as prop */}
        <h1>{this.state.userData.login}</h1>
        {/* Use .map on followers array and render a card component for each follower object */}
        <h2>Follower Cards</h2>
      </div>
    );
  }
}

export default App;
