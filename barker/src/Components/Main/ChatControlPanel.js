import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faBaseballBall } from '@fortawesome/free-solid-svg-icons';


export default class ChatControlPanel extends Component {

    render() {
        return(
            <Container className='centered py-4' style={{fontSize: '3rem'}}>
                <Row className='justify-content-center text-center'>
                        <div className='' style={{...iconStyle, color: '#FF8C42'}}>
                            <FontAwesomeIcon icon={faCookieBite} />
                        </div>
                        <div className='' style={{...iconStyle, color: '#FFF275'}}>
                            <FontAwesomeIcon icon={faBaseballBall} />
                        </div>
                </Row>
            </Container>
        );
    }

}

const iconStyle = {
    height: '132px',
    width: '132px',
    paddingTop: '11px',
    border: 'solid 12px #efefef',
    borderRadius: '50%',
    margin: '2px'
}

