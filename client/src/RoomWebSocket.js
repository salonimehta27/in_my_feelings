import React, { useEffect } from "react"

function RoomWebSocket(props) {
	useEffect(() => {
		props.getRoomData(window.location.href.match(/\d+$/)[0])
		props.cableApp.room = props.cableApp.cable.subscriptions.create(
			{
				channel: "ChatroomsChannel",
				room: window.location.href.match(/\d+$/)[0],
			},
			{
				received: (updatedRoom) => {
					props.updateApp(updatedRoom)
				},
			}
		)
	}, [])

	return <div></div>
}

export default RoomWebSocket
