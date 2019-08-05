import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import User from './user/user'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        name: "George",
        age: 23, 
        food: "egg",
        users: []
    }
  }


  componentWillMount(){
    console.log("Compomnent Will Mount")
    axios.get('https://api.github.com/users').then(res => {
      this.setState({ users: res.data })
    })
  }

  componentDidMount(){
     console.log("Compomnent Did Mount")
    // axios.get('https://api.github.com/users').then(res => {
    //   this.setState({ users: res.data })
    // })
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <h1>Hello, {this.state.age}</h1>
        <h1>Hello, {this.state.food}</h1>
        {
          this.state.users.map((user, i) => {
            return <User key={i} login={user.login} src={user.avatar_url}/>
          })
        }
      </div>
    )
  }
}

export default App


