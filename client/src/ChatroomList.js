import React, {useState,useEffect} from 'react'
import {ActionCable} from 'react-actioncable-provider'
import {API_ROOT} from './constants'
import MessagesArea from './MessagesArea'
import NewChatroomForm from './NewChatroomForm'
import Cable from './Cable'


function ChatroomList() {
    const[chatrooms,setChatrooms]=useState([])
    const[activeChatroom,setActiveChatroom]=useState(null)

    useEffect(()=>{
        fetch(`${API_ROOT}/chatrooms`)
        .then(r=>r.json())
        .then(chatrooms=>setChatrooms(chatrooms))
    },[])

    function handleReceivedChatroom(response)
    {
        const {message} =response;
        const chatroom = chatrooms.find((c)=>c.id===message.id)
        chatroom.message=[...chatroom.messages, message]

    }
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
