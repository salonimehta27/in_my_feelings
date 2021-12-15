import React,{useState} from 'react'
import {Container,Card} from 'react-bootstrap'

function RandomActivityGeneratorForSad() {
    const[participants,setParticipants]=useState("choose")
    const[activity,setActivity]=useState(null)
    function handleChange(e){
        setParticipants(e.target.value)
        fetch(`https://www.boredapi.com/api/activity?participants=${parseInt(participants)}`)
        .then(resp=>resp.json())
        .then(data=>setActivity(data))
    }
    console.log(activity)
    return (
        <Container>
        <div>
            <select name="participants" value={participants} onChange={(e) => handleChange(e)}>
                    <option value="choose">choose no. of participants</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            </select>
            <div>
                {/* {activity!==null&&activity.activity} */}
            </div>
        </div>
        </Container>
    )
}

export default RandomActivityGeneratorForSad
