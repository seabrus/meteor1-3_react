import React from 'react';
import BranchesList from '../containers/branches-list.js';

const RepositoryPage = ({repository}) => (
    <div>
        <a href={FlowRouter.path('repositories')}>Back</a>
        <h3>{repository.owner.login}/{repository.name}</h3>
        <hr />
        <BranchesList name={repository.name} owner={repository.owner.login} />
    </div>
);

RepositoryPage.propTypes = {
    repository: React.PropTypes.object
};

export default RepositoryPage;
