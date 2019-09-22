import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faComments, faPaw, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/logo.png';

export default class DogNav extends Component {

    render() {
        return (
            <Container className='pb-1'>
                <Row style={{fontSize: '2rem'}}>
                    <Col xs='3' style={leftIcon}>
                        <FontAwesomeIcon 
                            className='hoverable'
                            icon={faComments}
                            onClick={() => this.props.moveTo('chat')} />
                    </Col>
                    
                    <Col xs='6' style={rightIcon}>
                        <FontAwesomeIcon icon={faStoreAlt} />
                    </Col>
                    
                    <Col xs='3' style={rightIcon}>
                        
                    </Col>
                </Row>
            </Container>
        );
    }

}

const leftIcon = {
    textAlign: 'center',
    color: '#bbb'
}

const rightIcon = {
    textAlign: 'center',
    color: '#FF696E'
}

const logoStyle = {
    textAlign: 'center',
    color: '#d55'
}