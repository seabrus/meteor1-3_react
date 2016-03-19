// Initial visit: 
//     Unlogged in user will be redirected to the Home page
/*
function checkUser(context, redirect) {
    if (! Meteor.user()) {
        // FlowRouter.go('/');     // does not change the address
        redirect("/");                 // TypeError: str.slice is not a function  --  kadira
    }
}
FlowRouter.triggers.enter([checkUser], { except: ['repositories'] });
*/


// When working with the app: 
//     If a user loggs out, they will be redirected to Home
var wasLoggedIn = false;

Tracker.autorun(function () {
    if (!wasLoggedIn && Meteor.user()) {
        FlowRouter.reload();
        wasLoggedIn = true;
    }

    if (wasLoggedIn && !Meteor.user()) {
        if (FlowRouter.getRouteName() === 'repositories') {
            FlowRouter.reload();
        } 
        else {
            FlowRouter.go('repositories');
        }
        wasLoggedIn = false;
    }
});
