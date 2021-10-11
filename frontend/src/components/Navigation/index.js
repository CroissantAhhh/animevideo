import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <header className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <div className="nav-bar-logo">
            <img src="https://res.cloudinary.com/dmtj0amo0/image/upload/v1633909363/AVicon_c6v7xp.png" height="70px" width="70px"/>
          </div>
          <div className="nav-bar-site-name">
            <NavLink to="/">Home</NavLink>
          </div>
        </div>
        <div className="nav-bar-middle">
          <div className="nav-bar-search">
            <form className="search-form">
              <input className="search-field" placeholder="Search" type="search"></input>
              <button className="search-submit" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="nav-bar-right">
          <div className="user-message">
            <p>Welcome User!</p>
          </div>
          <div className="log">

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
