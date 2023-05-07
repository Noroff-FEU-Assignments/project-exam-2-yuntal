import axios from 'axios';
import {useState, useEffect} from 'react';
import {Card, Row, Container, Col} from 'react-bootstrap';
import FollowBatman from './FollowBatman';
import UnfollowBatman from './UnfollowBatman';
import BatmanPost from './FirstPost';
import { Link } from 'react-router-dom';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 
 


function BatmanPage(){
  const [profile, setProfile] = useState(null)

  let content = null;

  useEffect(()=>{
    axios.get(`https://api.noroff.dev/api/v1/social/profiles/BruceWayne`, options)
    .then(response=>{
      setProfile(response.data)
    })
  }, [`https://api.noroff.dev/api/v1/social/profiles/BruceWayne`, options])

  if(profile){
    content = 
    <Container fluid="fluid">
    <Row>
    <Link className="back" to="/Friends">Back to Friends</Link>
      <Col>
    <Card className="profile-card" style={{height:'42rem'}}>
    <Card.Img  variant="top"  className="top-avatar" src={profile.avatar}  />
    <Card.Body id="profile-body">
      <Card.Title className="profile-title">{profile.name}</Card.Title>
      <Card.Title className="email-title">{profile.email}</Card.Title>
      <Row className="button-row"> 
      <Col className="col-4 offset-6"> 
      <Row xs={2} md={4} lg={6}>
       <FollowBatman/>
        <UnfollowBatman/>
      </Row>
      </Col>
        </Row>
        Her skal det  nye kommentarfeltet / comment **
          </Card.Body>
     </Card>
     </Col>
  <Col> 
    <BatmanPost/>
  </Col>
  </Row>
  </Container>
  }
    return(
      <Col>
        {content}
      </Col>
    ) 
}

export default BatmanPage;


 