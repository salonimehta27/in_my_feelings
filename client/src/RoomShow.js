import React,{useState} from 'react'
import {useParams} from 'react-router'
import Chatfeed from './Chatfeed'
import MessagesArea from './MessagesArea'
import RoomWebSocket from './RoomWebSocket'
import {Container,Form} from 'react-bootstrap'
import './css/Chat.css'

function RoomShow({cableApp,updateApp,getRoomData,roomData,currentUser}) {
// console.log(roomData)
const[newMessage,setNewMessage]=useState("")
// const{chatroomId}=useParams()
// console.log(window.location.href.match(/\d+$/)[0])
const[messages,setMessages]=useState(roomData.messages)
function displayUsers(msgs){

    return msgs.map(msg=>{return <li key={msg.id} style={{color:"black"}}>{msg.message_body} </li>})

}
function handleMessageInput(event){
    setNewMessage(event.target.value)
}
function submitMessage(e){
    // debugger;
    e.preventDefault();
    // setNewMessage("");
    fetch("/messages",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept:"application/json"
        },
        body: JSON.stringify({
            message_body:newMessage,
            user_id:currentUser.data.attributes.id,
            chatroom_id:window.location.href.match(/\d+$/)[0]
        })
    })
    .then(resp => resp.json())
    .then(()=>{
        setNewMessage("")
    } )
}
// console.log(messages)
// console.log(roomData)
    return (
       <Container>
        <div>
            <ul>
                {displayUsers(roomData.messages)}
            </ul>
        </div>

        <Chatfeed room={roomData} currentUser={currentUser} />
        <MessagesArea submitMessage={submitMessage} newMessage={newMessage} onMessageInput={handleMessageInput}/>

            <RoomWebSocket
                    cableApp={cableApp}
                    updateApp={updateApp}
                    getRoomData={getRoomData}
                    roomData={roomData}
                />
       
        </Container>
    )
}

export default RoomShow
