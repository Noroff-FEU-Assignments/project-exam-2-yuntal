import React, { Component} from 'react'
import axios from 'axios'
import { Form, Container, Row  } from 'react-bootstrap'
import {Form as BootstrapForm} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeedBannerTwo from '../../Social/Banner2';


const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyOSwibmFtZSI6IkRlYWRQb29sIiwiZW1haWwiOiJEZWFkUG9vbEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImJhbm5lciI6Imh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9rTDRjb1FIVmpfQSIsImlhdCI6MTY4MTY2MTE3OX0.2kdMyU3MB1etTgrtuVzGbuJoTd7nlkZuzDESTWY6jLQ',
  },
}
 

class CommentSuperman extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         comments:'',
         body: '',
         media:'',
      }
    }

    changeHandler=(e)=> {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state, options)
        axios.get('https://api.noroff.dev/api/v1/social/posts/5378/comment', this.state, options)
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
    }

    
    changeHandler=(e)=> {
      this.setState({[e.target.name]: e.target.value})
  }
  submitHandler = e => {
      e.preventDefault()
      console.log(this.state, options)
      axios.post('https://api.noroff.dev/api/v1/social/posts/5378/comment', this.state, options)
      .then(response=>{
        console.log(response)
      })
      .then(response =>{
        alert("success")
      })
      .catch(error=>{
        console.log(error)
      })
  }

  render() {
    const {comments, body, title, media}  = this.state;
    return (
      <div>
      <Container fluid className="this-fluid"> 
      <Link className="back" to="/Superman" style={{color:'#fff'}}>Back to profile</Link>
      <FeedBannerTwo/>
      <h1 className="h-1-"style={{color:'#fff', marginTop:'10rem'}}>What's on your mind?</h1>
      <Form className=" my-form-3" onSubmit={this.submitHandler} id="post-form" style={{maxWidth:'40rem'}}>
      <BootstrapForm.Group className="mb-3">
          <div>
              <input type="text" placeholder="Title" name="title" value={title}onChange={this.changeHandler} className="text" style={{backgroundColor:'#212529', color:'#fff', border:'2px solid #fff'}}/>
          </div>
          </BootstrapForm.Group>
          <BootstrapForm.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label ></Form.Label>
        <Form.Control as="textarea"  name="message" type="text" placeholder="Message"rows={3} style={{backgroundColor:'#212529', color:'#fff', border:'2px solid #fff', marginTop:'-1rem', marginBottom:'2rem', height:'100px'}} />
      </BootstrapForm.Group>
          <BootstrapForm.Group className="mb-3">
          <div>
              <input type="text" placeholder="Media"  name="media" value={media}onChange={this.changeHandler} className="media" style={{backgroundColor:'#212529', color:'#fff', border:'2px solid #fff'}}/>
          </div>
          </BootstrapForm.Group>
          <BootstrapForm.Group>
          <button type="submit" className="post">Comment</button>
          </BootstrapForm.Group>
          </Form>
          <div>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }} xs={2} md={4} lg={6}>
          </Row>
          </div>
          <div>
              </div>
              </Container>
    </div>
    )
  }
}

export default CommentSuperman;