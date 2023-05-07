import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { POST_TOKEN1 } from "../../../constants/api";
import {Card, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
    },
  }
   

function PostDetail() {
 const [post, setPost] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useHistory();

 const { id } = useParams();

 if (!id) {
  history.push("/");
 }

 const url = POST_TOKEN1 + "/" + id;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url, options);

     if (response.ok) {
      const json = await response.json();
      console.log(json);
      setPost(json);
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
  },
  [url, options]
 );

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>An error occured: {error}</div>;
 }

 return (
  <Container fluid="feed-fluid" > 
  <Link className="back" to="/PostFeed">Back to Social</Link>
  <Row className="justify-content-md-center">  
  <Card className="post-card-1-1"> 
<Card.Img  variant="top"  className="my-avatar" src={post.media} />
<Card.Body id="post-body"> 
    <Card.Title className="mt-2" style={{color:'#fff'}}>{post.title}</Card.Title>
    <Card.Title style={{color:'#fff'}}>{post.body}</Card.Title>
    <Card.Text>
    </Card.Text>
    </Card.Body>
</Card>
  </Row>
  </Container>
 );
}

export default PostDetail;
