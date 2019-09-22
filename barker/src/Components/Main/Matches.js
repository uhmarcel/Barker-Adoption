import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


class Matches extends Component {

    state = {
        imageUrl: "https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Scooby",
        lastMessage : "Woof Woof bark bark"
    }

    render() {
        const { imageUrl, name, age, shortBio } = this.state; 
        return (
            <div className = "py-3">
                
                <Row>
                    <Col> 
                        <img src={imageUrl} className="rounded-circle" height="80" width="80"/>  
                    </Col>

                    <Col>
                        
                        <div className = "py-1 bold">
                        <span> <b> {this.state.name} </b> </span> 
                        </div> 

                        <div className = "py-2lead">
                        <span>{this.state.lastMessage}</span> 
                        </div> 
                    </Col>
                </Row>  
                <hr/>

            </div>
        );
    }

}

export default Matches;

