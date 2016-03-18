Meteor.publish('gitHubAccessToken', function () {
    if (this.userId) {
        return Meteor.users.find({
            _id: this.userId
        }, {
            fields: {
                'services.github.accessToken': 1
            }
        });
    } else {
        this.ready();
    }
});
