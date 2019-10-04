import React from 'react';
import axios from 'axios';
import UserCard from './userCard';
import FollowerCard from './followerCard';
import './App.scss';
import { Container, Card, Divider } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

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
    axios.get('https://api.github.com/rate_limit')
    .then((response)=>{
      console.log('RATE LIMIT', response)
    })
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then((response)=>{
      // console.log('axios response', response.data)
      this.setState({
        userData: response.data,
        followersUrl: response.data.followers_url
      })
    })
  }

  updateUser = (newUser) => {
    // console.log('setting user to e.target.value',e)
    this.setState({
      user: newUser
    })
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.user !== this.state.user || prevState.followersUrl !== this.state.followersUrl){
      // console.log('this.state.user in update', this.state.user)
      
      axios.get(`https://api.github.com/users/${this.state.user}`)
      .then((response)=>{
        // console.log('axios response', response.data)
        this.setState({
          userData: response.data,
          followersUrl: response.data.followers_url
        })
      })
      axios.get(`${this.state.followersUrl}`)
      .then((response)=>{
        // console.log('second axios response', response)
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
      <Container textAlign='center' className="mainContainer">
          {/* // Render userCard component, passing userData object as prop */}
          <UserCard updateUser={this.updateUser} userData={this.state.userData}/>
          {/* Use .map on followers array and render a card component for each follower object */}
          {/* <h2>Followers array map</h2> */}
          <Divider horizontal/>
          <h1>Followers:</h1>
        <Card.Group centered>
          {this.state.followersArray.map((follower)=><FollowerCard userData={follower} updateUser={this.updateUser}/>)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
