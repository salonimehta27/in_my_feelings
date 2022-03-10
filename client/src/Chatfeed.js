import React, { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { GiHelp } from "react-icons/gi"
import { AiFillEdit } from "react-icons/ai"
import EditMessage from "./EditMessage"
function Chatfeed({
	currentUser,
	room,
	allUsers,
	user,
	message,
	onUpdateMessage,
	onDeleteMessage,
}) {
	const [showHelp, setShowHelp] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	function showEditAndDelete() {
		setShowHelp(!showHelp)
	}

	function handleUpdateMessage(updatedMessage) {
		setShowEdit(false)
		onUpdateMessage(updatedMessage)
	}
	const timestamp = new Date(message.created_at).toLocaleTimeString()
	const whichUser = () => {
		if (message.user_id === parseInt(currentUser.data.id)) {
			return "current-user-message"
		} else {
			return "other-user-message"
		}
	}
	return (
		<div id="chat-message" className={whichUser()}>
			{user !== undefined && (
				<i style={{ float: "left", fontSize: "8px" }}>{user.username}</i>
			)}
			<img
				style={{ height: "auto", width: "30px", float: "right" }}
				src="https://yorktonrentals.com/wp-content/uploads/2017/06/usericon.png"
				alt="avatar"
			/>
			<p style={{ color: "black", height: "auto" }}>{message.message_body}</p>
			{timestamp !== "Invalid Date" ? (
				<i style={{ fontSize: "10px" }}>{timestamp}</i>
			) : (
				<i style={{ fontSize: "10px" }}>Edited</i>
			)}
			{whichUser() === "current-user-message" && (
				<GiHelp style={{ float: "left" }} onClick={showEditAndDelete}></GiHelp>
			)}
			{showHelp && whichUser() === "current-user-message" ? (
				<>
					<AiFillDelete
						onClick={() => onDeleteMessage(message.id)}
						style={{ float: "left" }}
					></AiFillDelete>
					<AiFillEdit
						onClick={() => setShowEdit(!showEdit)}
						style={{ float: "left" }}
					></AiFillEdit>
					{showEdit && (
						<EditMessage
							message={message}
							onUpdateMessage={handleUpdateMessage}
						></EditMessage>
					)}
				</>
			) : null}
		</div>
	)
}

export default Chatfeed
