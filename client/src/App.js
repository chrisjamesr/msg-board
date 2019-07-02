import React from 'react';
import './App.css';
// import apiService from './ApiService'

import MessagesContainer from './messageContainer'


class App extends React.Component {
  // constructor(){
  //   super()

  // }
  
  // componentDidMount(){
  //   apiService.getMessages().then(msgs=> {
  //     this.setState({
  //       messages: msgs
  //     });
  //   })
  // }
  
  // renderMessages = () => {
  //   if (!!this.state.messages.length) {
  //     return (
  //       this.state.messages.map((msg,idx) => {
  //         return (
  //           <MessageContainer 
  //             key={msg.id}
  //             content={msg.content}
  //             email={msg.email}
  //             />
  //           )
  //       })
  //     )
  //   }
  // }

  render(){

    return (
      <div className="App">
        <header>
        </header>        
        <MessagesContainer />
        
      </div>
    );
  }
}

export default App;
