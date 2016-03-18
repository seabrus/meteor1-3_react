import {composeWithTracker} from 'react-komposer';
import UserLogIn from '../components/user-login.jsx';

function login() {
    Meteor.loginWithGithub();
}

function logout() {
    Meteor.logout();
}

function composer(props, onData) {
    const user = Meteor.user();
    onData(null, {user, login, logout});
}

export default composeWithTracker(composer)(UserLogIn);
