import React from 'react'
import {Container,Form} from 'react-bootstrap'
function MessagesArea({submitMessage,newMessage,onMessageInput}) {
    return (   
      
        <div className="message-form-container">
            <form id='chat-form' className="message-form" onSubmit={submitMessage}>
            <textarea type='text' className="message-input" placeholder="post new message" value={newMessage} onChange={onMessageInput}></textarea>
            <br></br>
            <input className="send-button"type='submit'></input>
            </form>
         </div>
    
    )
}

export default MessagesArea
