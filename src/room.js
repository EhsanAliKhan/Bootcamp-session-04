import React, { useState} from 'react';
import './room.css';

function Room() {
  let [isLit, setLit] = useState(true);
  let [count, setCount] = useState(1);
    
  return (
      <div className={`room ${isLit? 'lit':'dark'}`}>
        This Room is {isLit? "lit":"dark"}
        <br/>
        Age: {count}
        <br/>
        <button onClick={()=>setLit(!isLit)}>Update Time</button>
        <button onClick={()=>setCount(++count)}>Update Age</button>
      </div>
  );
}

export default Room;
