import React from 'react';

class UserInfo extends React.Component {
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
            <p>
                Hello, {user.profile.name}.
                <button id='logout' onClick={logout} className="btn btn-link">Logout</button>
            </p>
        );
    }

    renderLogin(login) {
        return (
            <p>
                <button id='login' onClick={login} className="btn btn-link">Login</button>
            </p>
        );
    }
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    login: React.PropTypes.func,
    logout: React.PropTypes.func
};

export default UserInfo;
