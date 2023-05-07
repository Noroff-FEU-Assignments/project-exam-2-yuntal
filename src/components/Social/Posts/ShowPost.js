

  import { useState, useEffect } from "react";
  import { Row, Card, Button, Col } from "react-bootstrap";
  import { Link } from "react-router-dom";
  


  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
    },
  }
   

  
  function PostItem() {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
  
   useEffect(function () {
    async function fetchData() {
     try {
      const response = await fetch(  'https://api.noroff.dev/api/v1/social/posts/following', options
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
     {posts.map(function (post) {
      return  <div key={post.id}>
      <Link to={`detail/${post.id}`} style={{color:'white', textDecoration:'none'}}>
      <Row className="justify-content-md-center">  
      <Card className="post-card-1"> 
   <Card.Img  variant="top"  className="my-avatar" src={post.media} />
   <Card.Body id="post-body"> 
        <Card.Title className="mt-2" style={{color:'#fff'}}>{post.title}</Card.Title>
        <Card.Title style={{color:'#fff'}}>{post.body}</Card.Title>
        <Card.Text>
        </Card.Text>
        </Card.Body>
    </Card>
      </Row>
      </Link>
      </div>
     })}
    </>
   );
  }
  
  export default PostItem;