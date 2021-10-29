import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import { loginSession, logoutSession } from '../../store/session';
import { storeSearch } from '../../store/search';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  function loginDemo() {
    dispatch(loginSession({credential: "demo@user.io", password: "password"}));
  }
  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="username-display">
          <h2>{sessionUser.username}</h2>
        </div>
        <button
        className="logout-button"
        onClick={() => dispatch(logoutSession())}>Logout</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <button onClick={loginDemo}>Demo User</button>
        <SignupFormModal />
      </>
    );
  }

  const submitSearch = (event) => {
    event.preventDefault();
    const processedQuery = searchQuery.toLowerCase().split(' ').join('+');
    setSearchQuery('');
    dispatch(storeSearch(processedQuery));
    history.push(`/search?query=${processedQuery}`);
  }

  return (
    <header className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <div className="nav-bar-logo">
            <img src="https://res.cloudinary.com/dmtj0amo0/image/upload/v1634330905/AVlogoTrans_t7kf2p.png" alt="logo" height="70px" width="70px"/>
          </div>
          <div className="nav-bar-site-name">
            <NavLink to="/">
              <img src="https://res.cloudinary.com/dmtj0amo0/image/upload/v1634329237/avatuneName_yipjwf.png" alt="name" />
            </NavLink>
          </div>
        </div>
        <div className="nav-bar-middle">
          <div className="nav-bar-search">
            <img className="search-icon" alt="search icon" src="https://res.cloudinary.com/dmtj0amo0/image/upload/v1634331265/search-icon-png-9985_pypbjx.png" />
            <form className="search-form" onSubmit={submitSearch}>
              <input
              className="search-field"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}></input>
            </form>
          </div>
        </div>
        <div className="nav-bar-right">
          <div className="log">
            {isLoaded && sessionLinks}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
