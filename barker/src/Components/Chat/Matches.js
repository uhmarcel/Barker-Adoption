import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


class Matches extends Component {

    render() {
        const { imageUrl, name, age, shortBio, online } = this.props.dog; 
        return (
            <div className = "py-3" onClick={() => this.props.moveTo('dog')}>
                
                <Row>
                    <Col> 
                        <img src={imageUrl} className="rounded-circle" height="80" width="80"/>  
                    </Col>

                    <Col>
                        <div className = "py-1 bold">
                        <span> <b> {name} </b> </span> 
                        </div> 

                        <div className = "py-2lead">
                        <span>{online === true ? 'Online' : 'Offline'}</span> 
                        </div> 
                    </Col>
                </Row>  
                <hr/>

            </div>
        );
    }

}

export default Matches;

