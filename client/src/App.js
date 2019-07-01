import React from 'react';
import './App.css';
import apiService from './ApiService'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
  }
  
  componentDidMount(){
    apiService.getMessages().then(msgs=> {
      this.setState({
        messages: msgs
      });
    })
  }

  handleClick = () => {
    apiService.postMessage({
      content: 'onClick static text mutation test from console', 
      email:'email.com'});
  }

  renderMessages = () => {
    if (!!this.state.messages.length) {
      return (
        <ul> 
          { 
            this.state.messages.map((msg,idx) => {
              return <p key={msg.id}>{msg.content}</p>
            })
          }
        </ul>)
    }
  }

  render(){

    return (
      <div className="App">
        <div onClick = {this.handleClick}>
          {this.renderMessages() }
        </div>
      </div>
    );
  }
}

export default App;
