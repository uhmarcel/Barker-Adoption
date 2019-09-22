import React, { Component } from 'react';
import { Container, Row, Col ,  InputGroup, InputGroupAddon, InputGroupText, Input , Button, Form, FormGroup, Label, FormText} from 'reactstrap';
import logoPaw from '../Assets/BarkerPawLogo.png' 

export default class LoginView extends Component {

    render() {
        const { moveTo } = this.props;
        return(
            
            <div className='justify-content-center text-center bg-dark h-100 background p-4' >
                <img src= {logoPaw} className='py-5' style={{width: '60%'}}/>
                <Row className='pt-5' style={{fontSize: '1rem'}}>
                    <Col xs='12' style={leftIcon}>
                        <FormGroup className='text-center'>
                        <Label for="examplePassword">Email</Label>
                        <Input className='text-center'type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                        </FormGroup>
                    </Col>


                    <Col xs='12' style={leftIcon}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input className='text-center' type="password" name="password" id="examplePassword" placeholder="Enter password" />
                        </FormGroup>
                    </Col>  
                </Row>


                <Button 
                    color="secondary"
                    onClick={() => moveTo('main') }>Sign In</Button>{' '}
            </div>
        );
    }
}

const leftIcon = {
    textAlign: 'center',
    color: '#bbb'
}

const rightIcon = {
    textAlign: 'right',
    color: '#bbb'
}