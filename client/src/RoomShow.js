import React,{useState} from 'react'
import {useParams} from 'react-router'
import Chatfeed from './Chatfeed'
import RoomWebSocket from './RoomWebSocket'

function RoomShow({cableApp,updateApp,getRoomData,roomData,currentUser}) {
console.log(roomData.users)
const[newMessage,setNewMessage]=useState("")
console.log("This is roomData in Roomshow",roomData)
function displayUsers(users){

    return users.map(user=>{return <li key={user.id}>{users.username}</li>})

}
console.log(currentUser)
function handleMessageInput(event){
    setNewMessage(event.target.value)
}
function submitMessage(e){
    e.preventDefault();
    setNewMessage("");

    // const message={
       
    // }

    fetch('/messages',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            message_body:newMessage,
            user_id:currentUser.id,
            chatroom_id:roomData.chatroom.id
        })
    })
    .then(resp => resp.json())
    .then(result => {console.log(result)})



}
console.log(roomData)
    return (
        <div>
        <div>
            <ul>
                {displayUsers(roomData.users)}
            </ul>
        </div>
        <Chatfeed room={roomData.chatroom} currentUser={currentUser} />
            <form id='chat-form' onSubmit={submitMessage}>
                <h3>Post a new message:</h3>
                <textarea type='text' value={newMessage} onChange={handleMessageInput}></textarea>
                <br></br>
                <input type='submit'></input>
            </form>

            <RoomWebSocket
                    cableApp={cableApp}
                    updateApp={updateApp}
                    getRoomData={getRoomData}
                    roomData={roomData}
                />
        </div>
    )
}

export default RoomShow
