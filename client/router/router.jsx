import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../layouts/main-layout.jsx';
import NotFound404 from '../layouts/404.jsx';
import RepositoriesList from '../containers/repositories-list';
import RepositoryPage from '../containers/repository-page';
import FeaturesList from '../containers/features-list';


FlowRouter.route('/', {
    name: 'repositories',
    action() {
console.log('Home')
        mount(MainLayout, {
            content: <RepositoriesList />
        });
    }
});

FlowRouter.route('/:owner/:name', {
    name: 'repository',
/*
    triggersEnter: [function(context, redirect) {
        if (! Meteor.user()) {
            redirect('/');   // TypeError: str.slice is not a function  --  kadira
        }
    }],
*/
    action(params) {
        if (! Meteor.user()) {
            FlowRouter.go('/');
        }
        mount(MainLayout, {
            content: <RepositoryPage owner={params.owner} name={params.name}/>
        });
    }
});

FlowRouter.route('/:owner/:name/:sha', {
    name: 'branch',
    action(params) {
        if (! Meteor.user()) {
            FlowRouter.go('/');
        }
        mount(MainLayout, {
            content: <FeaturesList owner={params.owner} name={params.name} sha={params.sha}/>
        });
    }
});


FlowRouter.notFound = {
    action: function() {
        mount(NotFound404);
    }
};
