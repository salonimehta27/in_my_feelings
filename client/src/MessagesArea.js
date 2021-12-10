import React from 'react'
import {Container,Form} from 'react-bootstrap'
function MessagesArea({submitMessage,newMessage,onMessageInput}) {
    return (    
            <Form id='chat-form' onSubmit={submitMessage}>
            <h3>Post a new message:</h3>
            <textarea type='text' value={newMessage} onChange={onMessageInput}></textarea>
            <br></br>
            <input type='submit'></input>
            </Form>
    )
}

export default MessagesArea
