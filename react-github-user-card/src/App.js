import React from 'react';
import axios from 'axios';
import UserCard from './userCard';
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
    axios.get(`${this.state.followersUrl}`)
    .then((response)=>{
      this.setState({
        followersArray: [response.data]
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.followersUrl !== this.state.followersUrl){
      axios.get(`${this.state.followersUrl}`)
      .then((response)=>{
        console.log('second axios response', response)
        this.setState({
          followersArray: response.data
        })
      })
    }
  }

  render(){
    console.log('state in render', this.state)
    console.log('followers array in render', this.state.followersArray)
    return (
      <div className="App">
        {/* // Render userCard component, passing userData object as prop */}
        <UserCard userData={this.state.userData}/>
        {/* Use .map on followers array and render a card component for each follower object */}
        <h2>Followers array map</h2>
        {this.state.followersArray.map((follower)=><UserCard userData={follower}/>)}
      </div>
    );
  }
}

export default App;
