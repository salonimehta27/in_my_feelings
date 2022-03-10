import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { HiOutlineSave } from "react-icons/hi"
function EditMessage({ message, onUpdateMessage }) {
	// debugger;
	const [messageBody, setMessageBody] = useState(message.message_body)

	function handleFormSubmit(e) {
		e.preventDefault()
		const data = {
			user_id: message.user_id,
			message_body: messageBody,
			chatroom_id: message.chatroom_id,
		}

		fetch(`/messages/${message.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((r) => r.json())
			.then((data) => {
				onUpdateMessage({ ...data, id: message.id })
			})
	}
	return (
		<form className="edit-message" onSubmit={(e) => handleFormSubmit(e)}>
			<input
				type="text"
				name="body"
				autoComplete="off"
				value={messageBody}
				onChange={(e) => setMessageBody(e.target.value)}
			/>
			<Button
				className="edit-message"
				style={{ marginTop: "2px" }}
				type="Submit"
			>
				<HiOutlineSave />
			</Button>
		</form>
	)
}

export default EditMessage
