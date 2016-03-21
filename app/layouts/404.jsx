import React from 'react';
import MainNavbar from './navbar.jsx';

const NotFound404 = () => (
<div>
    <MainNavbar />

    <div className="container">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="jumbotron bg-green">
                    <div className="text-center">
                        <h2>404</h2>
                        <p>The page not found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default NotFound404;
