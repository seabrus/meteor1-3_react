import React from 'react';
import UserLogIn from '../containers/user-login';
import AccountsUIWrapper from  '../components/accounts-ui-wrapper.jsx';

const MainNavbar = () => (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">
                    Meact
                </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li> <UserLogIn /> </li>
{/*
                <li> <UserLogIn /> </li>
                <li> <div className="navbar-text-ui"><AccountsUIWrapper /></div> </li>
*/}
            </ul>
        </div>
      </div>
    </nav>
);

export default MainNavbar;
