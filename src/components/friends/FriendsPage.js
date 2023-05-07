import React from "react";
import FirstFriend from "./superman/Clark";
import SecondFriend from "./spiderman/Peter";
import ThirdFriend from "./batman/Batman";
import {Row, Col, Card} from 'react-bootstrap';
import FriendsCount from "./FollowingCount";


export default function MyFriends() {
	return (

		<>
		<Row id="fluid-2">
		<FriendsCount/>
			<Col>        <Card.Link href="/Superman" style={{textDecoration:'none'}}><FirstFriend/></Card.Link>		
			</Col>

			<Col> 			<Card.Link href="/spiderman" style={{textDecoration:'none'}}><SecondFriend/></Card.Link>	   
           </Col>
		 

		   <Col> 		<Card.Link href="/Batman" style={{textDecoration:'none'}}><ThirdFriend/></Card.Link>	
           </Col>
		</Row>
			</>
	);
}


