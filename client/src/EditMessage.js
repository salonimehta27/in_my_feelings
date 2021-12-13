import React,{useState} from 'react'

function EditMessage({message_body}) {
    const[messageBody,setMessageBody]=useState(message_body)
    function handleFormSubmit(e) {
        e.preventDefault();
      }
      const data = {
        "message": { 
          "body": messageBody
        }
      }
    fetch(`/messages/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(r => r.json())
        .then(data => onUpdateMessage(data.message))
    }
    return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
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
