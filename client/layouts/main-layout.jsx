import React from 'react';
import MainNavbar from './navbar.jsx';
import Welcome from './welcome.jsx';

const MainLayout = ({content}) => (
  <div>
    <MainNavbar />

    <div className="container">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                { Meteor.user() ? content : <Welcome /> }
            </div>
        </div>
    </div>
  </div>
);


MainLayout.propTypes = {
    content: React.PropTypes.element
};

export default MainLayout;
