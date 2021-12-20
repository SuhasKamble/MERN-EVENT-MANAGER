import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Event = () => {
    const [event,setEvent] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(async()=>{
        const res = await fetch(`http://127.0.0.1:5000/api/v1/events/${id}`,{method:"GET"})
        const data = await res.json()
        setEvent(data);
    },[])

    const deleteEvent = async(e)=>{
        const res = await fetch(`http://127.0.0.1:5000/api/v1/events/${id}`,{method:"DELETE"})
        if(res.status === 200){
            alert("Event Deleted")
            navigate("/")
        }else{
            alert("Something went wrong!")
        }
    }
    
    return (
        <div className='container'>
            <header className='event-header'>
            <Link to="/">Home</Link>
            <h1>{event.title}</h1>
            <div className="date">
                {event.time}
            </div>
            <div className="btn-container">
            <Link to={`/event/update/${event._id}`}><button className="update-btn"><i className="fas fa-pen"></i></button></Link>
                <button className="delete-btn" onClick={deleteEvent}><i className="fas fa-trash-alt"></i></button>
            </div>
            </header>
            <div className="event-details">
                <h1>{event.title}</h1>
                <p>{event.desc}</p>
            </div>
        </div>
    )
}

export default Event
