import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { logoutSession } from '../../store/session';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <p>Welcome {sessionUser.username}!</p>
        <ProfileButton user={sessionUser} />
        <button
        className="logout-button"
        onClick={() => dispatch(logoutSession())}>Logout</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <header className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <div className="nav-bar-logo">
            <img src="https://res.cloudinary.com/dmtj0amo0/image/upload/v1633909363/AVicon_c6v7xp.png" alt="logo" height="70px" width="70px"/>
          </div>
          <div className="nav-bar-site-name">
            <NavLink to="/">Home</NavLink>
          </div>
        </div>
        <div className="nav-bar-middle">
          <div className="nav-bar-search">
            <form className="search-form" action="/search" method="GET">
              <input
              className="search-field"
              placeholder="Search"
              type="search"
              name="query"></input>
              <button
              className="search-submit"
              type="submit"
              >Search</button>
            </form>
          </div>
        </div>
        <div className="nav-bar-right">
          <div className="user-message">

          </div>
          <div className="log">
            {isLoaded && sessionLinks}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
