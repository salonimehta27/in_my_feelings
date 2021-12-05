import React, {useState,useEffect} from 'react'
import {ActionCable} from 'react-actioncable-provider'
import { useParams } from 'react-router'
import {API_ROOT} from './constants'
import MessagesArea from './MessagesArea'
import NewChatroomForm from './NewChatroomForm'
import Cable from './Cable'


function ChatroomList() {

    const chatroomId=useParams()
    console.log(chatroomId)
    const[chatrooms,setChatrooms]=useState([])
    const[activeChatroom,setActiveChatroom]=useState(null)

    useEffect(()=>{
        fetch(`/chatrooms`)
        .then(r=>r.json())
        .then(chatrooms=>setChatrooms(chatrooms))
    },[])

    // function handleReceivedChatroom(response)
    // {
    //     const {message} =response;
    //     const chatroom = chatrooms.find((c)=>c.id===chatroomId)
    //     chatroom.message=[...chatroom.messages, message]

    // }
    return (
        <div>
            <ActionCable 
            channel={{channel: 'ChatroomChannel'}}
            onReceived={handleReceivedChatroom}
            ></ActionCable>
        </div>
    )
}

export default ChatroomList
