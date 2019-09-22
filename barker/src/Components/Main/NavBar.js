import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {

    render() {
        return (
            <Container className='pb-1'>
                <Row>
                    <Col xs='3' style={{ textAlign: 'left' }}>
                        A
                    </Col>
                    
                    <Col xs='6' style={{textAlign: 'center'}}>
                        Tinder
                    </Col>
                    
                    <Col xs='3' style={{textAlign: 'right'}}>
                        B
                    </Col>
                </Row>
            </Container>
        );
    }

}
