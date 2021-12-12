import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router'
import Chatfeed from './Chatfeed'
import MessagesArea from './MessagesArea'
import RoomWebSocket from './RoomWebSocket'
import {Container,Form} from 'react-bootstrap'
import './css/Chat.css'

function RoomShow({cableApp,updateApp,getRoomData,roomData,currentUser,users}) {
console.log(roomData)
const[newMessage,setNewMessage]=useState("")
// const{chatroomId}=useParams()
// console.log(window.location.href.match(/\d+$/)[0])
const[messages,setMessages]=useState(roomData.messages)

const chatroomId=window.location.href.match(/\d+$/)[0]
useEffect(()=>{
    fetch(`/chatrooms/${chatroomId}`)
    .then(resp=>resp.json())
    .then("this",console.log)
},[])
// function displayUsers(){
//    return roomData.users.map((user)=><li key={user.id}>{user.username}</li>)
// }
function handleMessageInput(event){
    setNewMessage(event.target.value)
}
const message={
    message_body:newMessage,
    user_id:currentUser.data.attributes.id,
    chatroom_id:chatroomId
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
        body: JSON.stringify(message)
    })
    .then(resp => resp.json())
    .then(()=>{
        // let messageDiv=document.getElementById('messages')
        // messageDiv.scrollTop=messageDiv.scrollHeight
        setNewMessage("")
    } )
}
function whichUser(message){
    // debugger
 const user= roomData.users.find((x)=>parseInt(x.id)===message.user_id)
 return user
//  console.log(user)
}
console.log(roomData.users.filter((item,i,ar)=>ar.indexOf(item)===i))
function displayMessages(messages){
    return messages.map(msg=>{
        const user=whichUser(msg)
        // console.log(user)
       return( msg.message_body!==null?
        <Chatfeed key={msg.id} room={roomData} user={user} currentUser={currentUser} allUsers={users} message={msg}/>
        :
        <div></div>
    )})
}
// console.log(messages)
// console.log(roomData)
    return (
        // <Container style={{overflow:"auto", height:"95%"}}>
            <div className="chat-container">

              <div className="users">
                  <br></br>
                  {/* {displayUsers()} */}
              </div>  
            <div id="messages" className="message-feed">
                <div>
                    {roomData.messages!==undefined && roomData.messages.length>0?
                    displayMessages(roomData.messages):
                    <h3>This room has no message yet</h3>}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <MessagesArea submitMessage={submitMessage} newMessage={newMessage} onMessageInput={handleMessageInput}/>
            </div>
            
        
       

            <RoomWebSocket
                    cableApp={cableApp}
                    updateApp={updateApp}
                    getRoomData={getRoomData}
                    roomData={roomData}
                />
   </div>
    // </div>
    
    )
}

export default RoomShow
