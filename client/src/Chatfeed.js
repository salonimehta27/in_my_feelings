import React from 'react'

function Chatfeed({currentUser,room,allUsers,user,message}) {
    // console.log(currentUser.data.attributes.id)
    // console.log(currentUser)
    // console.log(user)
    
    // console.log(message)

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
            
        <span>{user.name}</span>
        <h4 style={{color:"black"}}>{message.message_body}</h4>
        </div>
      
    )
}

export default Chatfeed
