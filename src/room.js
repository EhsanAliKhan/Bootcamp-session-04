import React, { useState } from 'react';
import Message from './message.js';
import './room.css';


function Room() {
    let [count, setCount] = useState(1);
    let [isMorning, setMorning] = useState(false);
    return (
    <div className={`box ${isMorning? 'dayLight':''}`}>
        <h1>Now it's ={isMorning?'Morning':'Night'} time. </h1>

        <Message counter = {count}/>
        <br />

        <button onClick={()=>setCount(++count)}>Increment counter</button>
        <button onClick={()=>setMorning(!isMorning)}>Update Time</button>
    </div>
  );
}

export default Room;
