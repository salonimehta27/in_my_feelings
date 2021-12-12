import React from 'react'

function Chatfeed({currentUser,room,allUsers,user,message}) {
    // console.log(currentUser.data.attributes.id)
    // console.log(currentUser)
    // // console.log(user)
    
    // console.log(message)
    const timestamp = new Date(message.created_at).toLocaleTimeString();
    const whichUser=()=>{
        if(message.user_id===parseInt(currentUser.data.id)){
            return 'current-user-message'
        }
        else
        {
            return 'other-user-message'
        }
    }
    return (
        
        <div id="chat-message" className={whichUser()}>
            
        <i style={{float:"left",fontSize:"8px"}}>{user.username}</i>
        <img style={{height:"auto",width:"30px",float:"right"}} src="https://yorktonrentals.com/wp-content/uploads/2017/06/usericon.png" alt="avatar"/>
        <p style={{color:"black", height:"auto"}}>{message.message_body}</p>
        <i style={{fontSize:"10px"}}>{timestamp}</i>
        </div>

      
    )
}

export default Chatfeed
