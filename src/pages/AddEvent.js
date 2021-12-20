import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

const AddEvent = () => {
    const [event,setEvent] = useState({
        title:"",
        desc:"",
        time:""
    })

    const navigate = useNavigate()

    const handleInput = (e)=>{
        const name = e.target.name;
        setEvent({...event,[name]:e.target.value})
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        if(!event.title || !event.desc || !event.time){
            alert("Please fill the form")
            return 
        }
        const data = {title:event.title, desc:event.desc, time:event.desc}
    
        const res = await fetch(`http://127.0.0.1:5000/api/v1/events/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(res.status === 200){
            alert("Event added...")
            navigate("/")
        }else{
            alert("Something went wrong")
        }
    }
    return (
        <div className='container add-container'>
            <div className='add-header'>
                <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                <span>Add new event</span>
                <i className="fas fa-sliders-h"></i>
            </div>
            <form>
            <input type="text" placeholder="Title" name='title' value={event.title} onChange={handleInput}/>
            <input type="text" name='desc' placeholder="Description" value={event.desc} onChange={handleInput}/>
            <input type="text" placeholder="Time" name='time' value={event.time} onChange={handleInput}/>
            <button className="submit-btn" type='submit' onClick={submitForm}>Add your thing</button>
            </form>
        </div>
    )
}

export default AddEvent
