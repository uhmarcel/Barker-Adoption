import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faPaw } from '@fortawesome/free-solid-svg-icons';


export default class ControlPanel extends Component {

    render() {
        const { accept, decline } = this.props;
        return(
            <Container className='centered py-4' style={{fontSize: '3rem'}}>
                <Row className='justify-content-center text-center'>
                        <div className='' style={{...iconStyle, color: '#FF696E'}}>
                            <FontAwesomeIcon 
                                icon={faCat} 
                                onClick={decline}
                            />
                        </div>
                        <div className='' style={{...iconStyle, color: '#4CBE93'}}>
                            <FontAwesomeIcon 
                                icon={faPaw} 
                                onClick={accept}
                            />
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

