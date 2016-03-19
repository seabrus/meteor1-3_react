Accounts.onCreateUser(function (options, user) {
    if (options.profile) {
        user.profile = options.profile;
    }
    else {
        user.profile = {};
    }

    if (user.services && user.services.github) {
        user.profile.username = user.services.github.username || 'noname';
    }

    return user;
});
