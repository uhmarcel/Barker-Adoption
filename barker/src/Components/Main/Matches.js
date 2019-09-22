import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


class Matches extends Component {

    state = {
        imageUrl: "https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Scooby",
        age: 6,
        shortBio: "Marketing Design at Tinder"
    }

    render() {
        const { imageUrl, name, age, shortBio } = this.state; 
        return (
            <div>

                <Row>
                    <Col> 
                        <img src={imageUrl} className="rounded-circle" height="80" width="80"/>  
                    </Col>

                    <Col>
                        <span>{name}, {age}</span>  
                        <span>{shortBio}</span>
                    </Col>
                </Row>  
              
            </div>
        );
    }

}

export default Matches;

