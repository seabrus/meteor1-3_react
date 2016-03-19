import React from 'react';

class UserLogIn extends React.Component {
    render() {
        const {user, logout, login} = this.props;
        return (
            <div id="userinfo">
                {user ? this.renderGreeting(user, logout) : this.renderLogin(login)}
            </div>
        );
    }

    renderGreeting(user, logout) {
        return (
            <p className="navbar-text-8">
                {user.profile.username} &nbsp;
                <button type="button" id='logout' onClick={logout} className="btn btn-default">Logout</button>
            </p>
        );
    }

    renderLogin(login) {
        return (
            <p className="navbar-text-8">
                <button type="button" id='login' onClick={login} className="btn btn-default">Login</button>
            </p>
        );
    }
}

UserLogIn.propTypes = {
    user: React.PropTypes.object,
    login: React.PropTypes.func,
    logout: React.PropTypes.func
};

export default UserLogIn;
