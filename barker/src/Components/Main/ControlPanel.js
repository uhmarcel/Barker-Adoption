import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';


export default class ControlPanel extends Component {

    render() {
        return(
            <Container className='centered' style={{fontSize: '4rem'}}>
                <Row className='justify-content-center text-center'>
                    <Col xs='3'>
                        <div className='border p-0 m-0 rounded-circle'>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </Col>
                    <Col xs='3'>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

