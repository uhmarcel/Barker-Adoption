import React, { Component } from 'react';
import { Container, Row, Col ,  InputGroup, InputGroupAddon, InputGroupText, Input , Button, Form, FormGroup, Label, FormText} from 'reactstrap';
import logoPaw from '../Assets/BarkerPawLogo.png' 

export default class LoginView extends Component {

    render() {
        const { moveTo } = this.props;
        return(
            
            <div className='justify-content-center text-center bg-dark h-100' >
                <img src= {logoPaw} style={{width: '70%'}}/>
                <Row style={{fontSize: '2rem'}}>
                    <Col xs='12' style={leftIcon}>
                        <FormGroup>
                        <Label for="examplePassword">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </Col>


                    <Col xs='12' style={leftIcon}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </Col>  
                </Row>


                <Button color="secondary">log in</Button>{' '}
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