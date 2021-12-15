import React,{useState} from 'react'
import {Container} from 'react-bootstrap'

function RandomActivityGeneratorForStressed() {
    const[activityType,setActivityType]=useState("choose type of activity")
    const[activity,setActivity]=useState(null)
    function handleChange(e){
        setActivityType(e.target.value)
        debugger
        fetch(`https://www.boredapi.com/api/activity?type=${activityType}`)
        .then(resp=>resp.json())
        .then(data=>setActivity(data))
    }
    console.log(activity)
    return (
        <Container>
        <div>
          
            <select name="participants" value={activityType} onChange={(e) => handleChange(e)}>
            <option >choose type of activity</option>
                    <option value="education">education</option>
                    <option value="recreational">recreational</option>
                    <option value="social">social</option>
                    <option value="diy">diy</option>
                    <option value="charity">charity</option>
                    <option value="cooking">cooking</option>
                    <option value="relaxation">relaxation</option>
                    <option value="music">music</option>
                    <option value="busywork">busywork</option>
            </select>
            <div>
                {/* {activity.activity} */}
            </div>

        </div>
        </Container>
    )
}

export default RandomActivityGeneratorForStressed