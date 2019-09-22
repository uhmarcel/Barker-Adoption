import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faPaw } from '@fortawesome/free-solid-svg-icons';


export default class ControlPanel extends Component {

    render() {
        return(
            <Container className='centered py-3' style={{fontSize: '3rem'}}>
                <Row className='justify-content-center text-center'>
                    <Col xs='3'>
                        <div className='' style={{...iconStyle, color: '#FF696E'}}>
                            <FontAwesomeIcon icon={faCat} />
                        </div>
                    </Col>
                    <Col xs='3'>
                        <div className='' style={{...iconStyle, color: '#4CBE93'}}>
                            <FontAwesomeIcon icon={faPaw} />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

const iconStyle = {
    height: '120px',
    width: '120px',
    paddingTop: '11px',
    border: 'solid 10px #eee',
    borderRadius: '50%'
}

