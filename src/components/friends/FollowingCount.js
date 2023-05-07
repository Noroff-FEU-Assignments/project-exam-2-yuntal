import axios from 'axios';
import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';



const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 
 


function FriendsCount(){
  const [profile, setProfile] = useState(null)

  let content = null;

  useEffect(()=>{
    axios.get(`https://api.noroff.dev/api/v1/social/profiles/DeadPool`, options)
    .then(response=>{
      setProfile(response.data)
    })
  }, [`https://api.noroff.dev/api/v1/social/profiles/DeadPool`, options])

  if(profile){
    content = 
    <Container fluid="fluid-twice">
      <h5 className="counter" style={{color:'#fff'}}>Currently Following ({profile._count.following}) users</h5>
</Container>
  }
    return(
      <div>
        {content}
      </div>
    ) 
}

export default FriendsCount;