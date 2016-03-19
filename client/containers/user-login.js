import {composeWithTracker} from 'react-komposer';
import UserLogIn from '../components/user-login.jsx';

function login() {
    Meteor.loginWithGithub();
}

function logout() {
    Meteor.logout();

    Tracker.autorun(function (c) {
        if (! Meteor.user()) {
            if (FlowRouter.getRouteName() === 'repositories') {
                FlowRouter.reload();
            } 
            else {
                FlowRouter.go('repositories');
            }
            c.stop();
        }
    });
}

function composer(props, onData) {
    const user = Meteor.user();
    onData(null, {user, login, logout});
}

export default composeWithTracker(composer)(UserLogIn);
