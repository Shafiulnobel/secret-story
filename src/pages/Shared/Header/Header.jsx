import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { ImExit } from 'react-icons/im';

import './Header.css'
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
  const{user,logOut} = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogOut = () => {
    logOut()
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });
}
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" ><img className='img-fluid w-75' src="https://i.ibb.co/5WL7wf3/The-Secret-Story.png" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page">
                <ActiveLink to={`/`}>Home</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page">
                <ActiveLink to={`/shop`}>Shop</ActiveLink>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page">
                <ActiveLink to={`/premium`}>Premium Collection</ActiveLink>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page">
                <ActiveLink to={`/review`}>Review</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" >
                <ActiveLink to={`/about`}>About us</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" >
                <ActiveLink to={`/contact`}>Contact</ActiveLink>
              </a>
            </li>
          </ul>
          <div className='me-auto'>
            <button type="button" className="btn btn-primary position-relative awesome">
              <FontAwesomeIcon className='fs-4' icon={faCartShopping} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            {
              user? <span type="button" className='ms-2 text-danger fs-5' onClick={handleLogOut} variant='danger'>Logout <ImExit/> </span>:
              <Link  className='ms-3 text-decoration-none text-secondary fs-5' to="/login"><span><FontAwesomeIcon className='me-2' icon={faUser}></FontAwesomeIcon></span>Login/Register</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;