import React, { useState } from 'react';
import data from './data';
import "./App.css";

function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const submitHandler = (e) =>{
e.preventDefault();
let amount = parseInt(count);
if (count<=0){
  amount=0
}
if (count>8){
  amount=8
}
setText(data.slice(0,amount))
  }
  
  return (
     <section className="section-center">
<h3>Tired of boring lorem ipsum</h3>
<form className="lorem-form" onSubmit={submitHandler}>
  <label htmlFor="amount">Paragraph:</label>
  <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
  <button type="submit" className="btn">generate</button>
</form>
{text.map((item,index)=>{
  return <p key={index}>{item}</p>
})}
     </section>
    )
}

export default App;
