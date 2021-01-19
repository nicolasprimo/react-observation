import React,{useState} from 'react'


function Enfant(props) {
  return (
    <div className="App">     
      <h1>{props.msg}</h1>
      <input type="text" onChange={(e)=>props.handleChange(e.target.value,props.keys)}/>
    </div>
  );
}

export default Enfant;
