import React from "react"
import "./css/Chat.css"
import { FiSend } from "react-icons/fi"
import { Button } from "react-bootstrap"
function MessagesArea({ submitMessage, newMessage, onMessageInput }) {
	return (
		<form id="chat-form" className="message-form" onSubmit={submitMessage}>
			<textarea
				type="text"
				className="message-input"
				placeholder="Post new message... "
				value={newMessage}
				onChange={onMessageInput}
			></textarea>
			<Button className="send-button" type="submit">
				Send<FiSend></FiSend>
			</Button>
		</form>
	)
}

export default MessagesArea
