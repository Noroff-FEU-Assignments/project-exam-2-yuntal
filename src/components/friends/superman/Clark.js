import axios from 'axios';
import {useState, useEffect} from 'react';
import {Card, Row, Container, Col} from 'react-bootstrap';


const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 
 


function FirstFriend(){
  const [profile, setProfile] = useState(null)

  let content = null;

  useEffect(()=>{
    axios.get(`https://api.noroff.dev/api/v1/social/profiles/ClarkKent`, options)
    .then(response=>{
      setProfile(response.data)
    })
  }, [`https://api.noroff.dev/api/v1/social/profiles/ClarkKent`, options])

  if(profile){
    content = 
		<Container className="fluid-2"> 
    <Row className="friendlist">    
      <Col>
      <Card className="profile-card-">    
    <Card.Img  variant="top"  className="my-avatar-one" src={profile.avatar}  />
    <Card.Body id="profile-body-1">
      <Card.Title className="profile-title-">{profile.name}</Card.Title>
      <Card.Title className="email-title- text-white">{profile.email}</Card.Title>
          </Card.Body>
     </Card>
     </Col>
  </Row>
  </Container>
  }
    return(
      <div>
        {content}
      </div>
    ) 
}

export default FirstFriend;