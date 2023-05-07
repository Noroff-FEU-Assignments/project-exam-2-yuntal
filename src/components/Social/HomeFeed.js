import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyPage from '../myProfile/MyProfile';
import {Form, Container} from 'react-bootstrap';
import Comment from '../myProfile/CommentPost';
import FeedBanner from './Banner';
import GetPosts from './Posts/ShowPost';
import { FiUsers} from 'react-icons/fi';
import { FiUser} from 'react-icons/fi';
import {BsHouse} from 'react-icons/bs';
import {BsList} from 'react-icons/bs';






function HomeFeed(){
  return(
    <>

    <Container fluid="feed-fluid" > 
      <Container fluid="sm-fluid">
    <FeedBanner/>
    </Container>
    <Container fluid>
    <div className="row">
      <div className="col-md-2 min-vh-30 rounded d-flex flex-column p-3" id="bg-dark">
      <a className="text-decoration-none d-flex align-itemcenter">
        <span className="ms-1 fs"></span>
      </a>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item text-white fs-4">
          <a href="/PostFeed" className="nav-link text-white fs-5" aria-current="page">
        <BsList/>
        <span className='ms-2' style={{fontFamily:'Roboto Mono'}}>Social</span>
        </a>
        </li>
        <li className="nav-item text-white fs-4">
          <a href="/Friends" className="nav-link text-white fs-5" aria-current="page">
          <FiUsers/>
          <span className='ms-2' style={{fontFamily:'Roboto Mono'}}>Friends</span>
        </a>
        </li>
        <li className="nav-item text-white fs-4">
          <a href="/myprofile" className="nav-link text-white fs-5" aria-current="page">
          <BsHouse/>
          <span className='ms-2' style={{fontFamily:'Roboto Mono'}}>Home</span>
        </a>
        </li>
        <li className="nav-item text-white fs-4">
          <a href="/login" className="nav-link text-white fs-5" aria-current="page">
          <FiUser/>
          <span className='ms-2' style={{fontFamily:'Roboto Mono'}}>Login</span>
        </a>
        </li>
      </ul>
      </div>
    </div>
      <div>
			<Form.Group id="post-submission" style={{ backgroundColor: '#212121'}}>
				<Form.Group>
				</Form.Group>
        </Form.Group>        
        </div>
        </Container>
        <GetPosts/>
        </Container>
         </>
  )
}

export default HomeFeed;