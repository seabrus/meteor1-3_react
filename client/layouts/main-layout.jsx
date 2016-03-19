import React from 'react';
import UserLogIn from '../containers/user-login';
import AccountsUIWrapper from  '../components/accounts-ui-wrapper.jsx';

const MainLayout = ({content}) => (
  <div>

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

    <div className="container">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                { Meteor.user() ? content : ( 
                    <div className="jumbotron bg-green">
                        <div className="text-center">
                            <h2>Welcome to Meact</h2>
                            <p>Please log in to start working</p>
                        </div>
                    </div>
                  )
                }
            </div>
        </div>
    </div>

  </div>
);


MainLayout.propTypes = {
    content: React.PropTypes.element
};

export default MainLayout;
