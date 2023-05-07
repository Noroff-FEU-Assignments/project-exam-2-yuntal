import React from "react";
import { Card,Row } from "react-bootstrap";

export default function FeedBannerTwo() {
	return (
		<> 
        <Row className="this-row-1" >
	  <Card className="feed-card-1">
      <Card.Body id="feed-body-1">
      <img src="images/textless.png" className="sl-logo-1" alt="company logo"></img>
        <Card.Text className="this-text"style={{paddingTop:'3rem', marginLeft:'1rem'}}>
        Share More. A basic social media platform
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>
		</>
	);
}



