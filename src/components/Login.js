import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [buttonText, setButtonText] = useState('Login');
    const [formDisabled, setFormDisabled] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            console.log(response.data);
            window.location.href = response.data.redirectUrl; 
        } catch (error) {
            console.error(error);
           
        }
    };

    const handleDragLeave = event => {
        event.stopPropagation();
        event.preventDefault();
    };

    const handleDragOver = event => {
        event.stopPropagation();
        event.preventDefault();
    };

    const handleDragEnter = event => {
        event.stopPropagation();
        event.preventDefault();
    };

    const handleMouseEnter = () => {
        setButtonText('Ready to Login?'); 
    };

    const handleMouseLeave = () => {
        setButtonText('Login');
    };

    const handleMouseDown = () => {
        alert('Mouse button pressed'); 
    };

    const handleMouseUp = () => {
        setFormDisabled(false); 
    };

    const handleClick = () => {
        setFormDisabled(true); 
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row>
                <Col>
                    <Card className="p-4 shadow-lg">
                        <Card.Body>
                            <Card.Title className="text-center">Login</Card.Title>
                            <div 
                                className={'endzone'} 
                                onDragOver={handleDragOver} 
                                onDragEnter={handleDragEnter} 
                                onDragLeave={handleDragLeave}
                            >
                                <Form>
                                    <Form.Group controlId="formUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            disabled={formDisabled}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            disabled={formDisabled}
                                        />
                                    </Form.Group>
                                    <Button 
                                        variant="primary" 
                                        onClick={handleLogin} 
                                        onMouseDown={handleMouseDown} 
                                        onMouseUp={handleMouseUp} 
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        onDoubleClick={handleClick}
                                        className="w-100 mt-3"
                                    >
                                        {buttonText}
                                    </Button>
                                </Form>
                            </div>
                            <p>Already a User ? <Link to="/register">Register</Link></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
