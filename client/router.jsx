import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './layouts/main-layout.jsx';
import RepositoriesList from './containers/repositories-list';
import RepositoryPage from './containers/repository-page';
import FeaturesList from './containers/features-list';


FlowRouter.route('/', {
    name: 'repositories',
    action() {
        mount(MainLayout, {
            content: <RepositoriesList />
        });
    }
});

FlowRouter.route('/:owner/:name', {
    name: 'repository',
    action(params) {
        mount(MainLayout, {
            content: <RepositoryPage owner={params.owner} name={params.name}/>
        });
    }
});

FlowRouter.route('/:owner/:name/:sha', {
    name: 'branch',
    action(params) {
        mount(MainLayout, {
            content: <FeaturesList owner={params.owner} name={params.name} sha={params.sha}/>
        });
    }
});
