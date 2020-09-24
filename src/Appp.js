import React, { useState } from 'react';
import axios from 'axios'

function Appp() {

  const [title, setTitle] = useState('')
  const [cover, setCover] = useState()




  const newItem = () => {
    const uploadData = new FormData()
    uploadData.append('title', title)
    uploadData.append('image', cover, cover.name)
    axios.post('api/', uploadData)
    .then(res => console.log(res))
  }



    return (
    <div>
      <br></br>
    
      <input type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <br></br>
      <input type='file' id='image' name='image' onChange={event => setCover(event.target.files[0])}></input>
      <button onClick={() => newItem()}>click me</button>
      
    </div>
    );
  }
  

export default Appp;
