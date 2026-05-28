import React from 'react'
import './Event.css'
import { Link } from 'react-router-dom'
import Activity2024 from './Activity2024.jsx'

const Event = () => {

  return (
    <section id='Event' className='top'>
      <h5>What is our FUN</h5>
      <h2>Previous Event</h2>
      < Activity2024 />
      <div className='event_btn2'>
      <Link to='/our-event/previous/extra' className='btn btn-primary btn_top'>
          View More
        </Link> 
      </div>
    </section>
  );
}

export default Event;
