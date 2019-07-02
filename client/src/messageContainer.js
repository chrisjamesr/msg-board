import React, { Component } from 'react';
import apiService from './ApiService';

class MessagesContainer extends Component {
    constructor(){
        super()
        this.state = { messages: [] }
    }

    componentDidMount(){
        apiService.getMessages().then(msgs=> {
          this.setState({
            messages: msgs
          });
        })
    }
  
  renderMessages = () => {
    if (!!this.state.messages.length) {
      return (
        this.state.messages.map((msg,idx) => {
          return (
            <MessageComponent
              key={msg.id}
              content={msg.content}
              email={msg.email}
              />
            )
        })
      )
    }
  }
    render(){
        return <main className="msg-container"> { this.renderMessages() }</main>; 
    }


}
    
export default MessagesContainer

function MessageComponent({content, email}){
    const messageStyle = {
        width: '180px',
        height: '120px',
        margin: '10px 20px',
        border: '.5px solid black',
        padding: '2%',
    }
    return (
        <div style={messageStyle}>
            
                {content} 
                <br/> 
                <em> {email} </em>
            
        </div>
    )
}