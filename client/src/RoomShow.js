import React,{useState} from 'react'

function RoomShow({cableApp,users,updateApp,getRoomData,currentRoom,currentUser}) {
const[newMessage,setNewMessage]=useState("")

function displayUsers(users){

    return users.map(user=>{return <li key={user.id}>{users.attributes.username}</li>})

}


    return (
        <div>
            
        </div>
    )
}

export default RoomShow
