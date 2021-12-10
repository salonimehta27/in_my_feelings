import React from 'react'

function Chatfeed({currentUser,room}) {
    console.log(currentUser.data.attributes.id)
    console.log(currentUser)
    console.log(room.messages)
    const myMessages=room.messages.filter(msg=>msg.user_id===currentUser.data.attributes.id)
    
    console.log(myMessages)
    return (
        <div>
            {myMessages.map((x)=><p style={{float:"left",display:"flex",flexDirection:"column",position:"absolute",direction:"column"}}>{x.message_body}</p>)}
        </div>
    )
}

export default Chatfeed
