import React,{useState} from 'react'

function EditMessage({message,onUpdateMessage}) {
    // debugger;
    const[messageBody,setMessageBody]=useState(message.message_body)

    function handleFormSubmit(e) {
      e.preventDefault();
      const data =  { 
            id:message.id,
            user_id:message.user_id,
            message_body:messageBody,
            chatroom_id: message.chatroom_id
        }

    fetch(`/messages/${message.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(r => r.json())
        .then(data =>{
            console.log(data)
         onUpdateMessage(data)})
    }
    return (
    <form className="edit-message" onSubmit={(e)=>handleFormSubmit(e)}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
    )
}

export default EditMessage
