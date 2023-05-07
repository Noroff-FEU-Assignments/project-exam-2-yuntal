

import { useState, useEffect } from "react";
import { Row, Card, Col, Image } from "react-bootstrap";
import LikesPeter from "./LikePost";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";


const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 
   


function PetersFirstPost() {
 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(  'https://api.noroff.dev/api/v1/social/profiles/peter_parker/posts', options
    );

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setPosts(json);
    } else {
     setError("An error occured");
    }
   } catch (error) {
    setError(error.toString());
   } finally {
    setLoading(false);
   }
  }
  fetchData();
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>ERROR: An error occured</div>;
 }

 return (
  <>
   {posts.slice(0,3).map(function (post) {    
    
    return <Col key={post.id}>{post.title}
  <Row style={{marginBottom:'20rem'}}>     
        <Col>
     <Card className="post-card"> 
    <Card.Img  variant="top"  className="my-avatar" src={post.media} />
    <Card.Body id="post-body"> 
    <Card.Title className="mt-5">{post.title}</Card.Title>
      <Card.Text className="tex" style={{color:'#fff'}}>
        {post.body}
      </Card.Text>
      <Row xs={2} md={4} lg={6}>
      <LikesPeter/>
      <Link to="/CommentSpiderman">  <FaRegComment style={{color:'#fff', fontSize:'36px', marginTop:'2.5rem'}}/>  </Link>
      </Row>
      </Card.Body>
  </Card>
  </Col>
    </Row>
    </Col>
   })}
  </>
 );
}

export default PetersFirstPost;