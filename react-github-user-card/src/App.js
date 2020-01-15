import React, { Component } from 'react';
import axios from 'axios'
//import User from './component/User'
import './App.css';
import UserCardList from './component/UserCardList';

class App extends Component {
  state = {
    userData: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then(res => {
        this.setState({
          userData: res.data
        })
        console.log(res)
      })
      .catch(err => console.log(err))
  }




  render() {
    return (
      <div className="App">
        <UserCardList userData={this.state.userData} />

      </div>
    );
  }
}

export default App;
