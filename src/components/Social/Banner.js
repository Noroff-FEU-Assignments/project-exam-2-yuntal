import React from "react";
import { Card,Row, Image} from "react-bootstrap";

export default function FeedBanner() {
	return (
		<> 
        <Row className="this-row" >
	  <Card className="feed-card">
      <Card.Body id="feed-body">
      <Image src="images/textless.png" className="sl-logo" alt="company logo"></Image>
        <Card.Text className="this-text"style={{paddingTop:'3rem', marginLeft:'1rem'}}>
        Share More. A basic social media platform
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>
		</>
	);
}



