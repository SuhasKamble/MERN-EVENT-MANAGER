import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem'

const Home = () => {
    const [events,setEvents] = useState([]);
    useEffect(async()=>{
        const res = await fetch("http://127.0.0.1:5000/api/v1/events",{method:"GET"})
        const data = await res.json()
        setEvents(data)
    },[])
    return (
        <div className='container'>
            <header>
                <h1>Your Events</h1>
                <div className="date">
                    Dec 19, 2021
                </div>
            </header>
            <div className="event-container">
                {
                    events.map((event)=>{
                        return <EventItem key={event._id} event={event}/>
                    })
                }
            </div>
            <div className="add-btn">
                <Link to="/add"><button className='add-btn'><i className='fas fa-plus'></i></button></Link>
            </div>
        </div>
    )
}

export default Home
