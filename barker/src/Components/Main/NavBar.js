import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faComments} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/logo.png';

export default class NavBar extends Component {

    render() {
        const { moveTo } = this.props;
        return (
            <Container className='pb-1'>
                <Row style={{fontSize: '2rem'}}>
                    <Col xs='3' style={leftIcon}>
                        <FontAwesomeIcon 
                            className='hoverable'
                            icon={faCog} 
                        />
                    </Col>
                    
                    <Col xs='6' style={logoStyle}>
                        <img src={logo} style={{height: '50px', marginTop: '-15px'}}/>
                    </Col>
                    
                    <Col xs='3' style={rightIcon}>
                        <FontAwesomeIcon 
                            className='hoverable'
                            icon={faComments} 
                            onClick={() => moveTo('chat')}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

}

const leftIcon = {
    textAlign: 'left',
    color: '#bbb'
}

const rightIcon = {
    textAlign: 'right',
    color: '#bbb'
}

const logoStyle = {
    textAlign: 'center',
    color: '#d55'
}