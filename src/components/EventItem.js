import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({event}) => {
    return (
        <Link to={`/event/${event._id}`} className="event">
                <div className="event-left">
                    <div className="icon">
                        <i className="fas fa-calendar-week"></i>
                    </div>
                </div>
                <div className="event-right">
                    <h2>{event.title}</h2>
                    <p>{event.desc.substring(0,100)}...</p>
                </div>
            </Link>
    )
}

export default EventItem
