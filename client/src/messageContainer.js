import React, { Component } from 'react';
import {postMessage} from './ApiService';

class Message extends Component {
    constructor(){
        super()
        this.state = {
            content: '',
            email: ''
        }
    }

    componentDidMount(){
        this.setState({
            content: this.props.content,
            email: this.props.email
        })
    }
    render(){
        const {content, email} = this.state;
        return (
            <div>
                <MessageComponent {...this.props}/>
            </div>
        )
    }


}
    
export default Message

function MessageComponent({content, email}){
    return (
        <div>
            <p>
                {content} - <em> {email} </em>
            </p>    
        </div>
    )
}