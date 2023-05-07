import React, {useEffect} from 'react';
import axios from 'axios';
import {AiOutlineDelete} from 'react-icons/ai';

const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
    },
  }
   


function DeletePost(){
    useEffect(()=> {
        axios.get('https://api.noroff.dev/api/v1/social/posts/5208', options).then(res=>console.log(res.data))
    })

    function DeleteTest() {
    axios.delete('https://api.noroff.dev/api/v1/social/posts/5208', options)    
    .then(()=>{
        alert("Post is deleted")
    })    
    }

return (
    <div className="d-flex align-items-center justify-content-center" id="remove">
        <div className='w-50 text-center'>
            <button className='delete-button' onClick={DeleteTest}><AiOutlineDelete className="trash" style={{fontSize:'36px'}}/></button>
        </div>
    </div>
)}

export default DeletePost;