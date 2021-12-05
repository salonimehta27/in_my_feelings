import React,{useEffect} from 'react'

function RoomWebSocket(props) {

    // console.log(props)

    useEffect(()=>{
        props.getRoomData(window.location.href.match(/\d+$/)[0])
        // the subscriptions.create() method is sending params to the subscribed action in my RoomsChannel
        props.cableApp.room = props.cableApp.cable.subscriptions.create({
            channel: 'ChatroomsChannel',
            room: window.location.href.match(/\d+$/)[0]
        }, 
        {
            received: (updatedRoom) => {
              props.updateApp(updatedRoom)
            }
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default RoomWebSocket
