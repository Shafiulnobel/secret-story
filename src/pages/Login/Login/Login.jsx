import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../../hook/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('login')
    console.log('logged in page location ', location)
    const from = location.state?.from?.pathname || "/";
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = userCredential.user;
                console.log(loggedUser)
                setSuccess('Login successful.');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('Google Login successful.');
                navigate(from, { replace: true })
            }).catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <Container className='w-50 mt-5'>
            <Card className='p-3'>
                <h3>Login</h3>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button className='w-100' variant="warning" type="submit">
                        Login
                    </Button>
                    {success && <div className="text-success">{success}</div>}
                    {error && <div className="text-danger">{error}</div>}
                    <Form.Text className="text-muted ">
                        <p className='text-center my-3'> Don't have an account? <Link className='text-warning' to="/register">Create an account</Link></p>
                    </Form.Text>
                </Form>
                <Button onClick={handleGoogleSignIn} className='w-100 text-dark' variant="light" type="submit">
                    <FaGoogle /> Continue with google
                </Button>
            </Card>

        </Container>
    );
};

export default Login;