import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import useTitle from '../../../hook/useTitle';
const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Register')
    console.log('logged in page location ', location)
    const from = location.state?.from?.pathname || "/";
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser)
                updateUserData(result.user, name, photo)
                setSuccess('Registration successful.');
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
                console.log(loggedUser)
                setSuccess('Google sign-in successful.');
                navigate(from, { replace: true })
            }).catch((error) => {
                // Handle Errors here.
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        }).then(() => {
            console.log('profile updated')
        }).catch((error) => {
            console.log(error.message)
        }
        )
    }
    return (
        <Container className='d-flex justify-content-center mt-5'>
            <Card className='p-3 w-50'>
                <h3>Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photo' type="text" placeholder="Photo URL" />
                    </Form.Group>
                    <Button className='w-100' variant="warning" type="submit">
                        Register
                    </Button>
                    {success && <div className="text-success">{success}</div>}
                    {error && <div className="text-danger">{error}</div>}
                    <Form.Text className="text-muted ">
                        <p className='text-center my-3'> Already have an account? <Link className='text-warning' to="/login">Login</Link></p>

                    </Form.Text>
                </Form>
                <Button onClick={handleGoogleSignIn} className='w-100 text-dark' variant="light" type="submit">
                    <FaGoogle /> Continue with google
                </Button>
            </Card>

        </Container>
    );
};

export default Register;